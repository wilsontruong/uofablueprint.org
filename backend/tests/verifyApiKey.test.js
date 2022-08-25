const mongoose = require('mongoose')
const request = require('supertest')

const app = require('../src/app')

/**
 * Currently runs the test with jest which is not the recommended
 * way to test mongoose: https://mongoosejs.com/docs/jest.html.
 */
describe('Test the root path', () => {
    beforeAll(async () => {
        // connect to mongoDB
        await mongoose.connect(process.env.MONGO_URI_TEST, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    })
    afterAll(async () => {
        // disconnect from mongoDB
        var db = mongoose.connection
        await db.collection('students').deleteMany({})
        await mongoose.connection.close()
    })
    jest.setTimeout(20000) // added a timeout to avoid the test to fail as the MongoDB connection is slow

    test("GET/projects/all/  Request with correct API key-> Returns status 200", async () => {
        api_key = process.env.API_KEY
        const response = await request(app)
        .get('/projects/all')
        .set('web-api-key', api_key)
    expect(response.statusCode).toBe(200)

    })

    test("GET/projects/all/  Request with no API key-> Returns status 401", async () => {
        api_key = process.env.API_KEY
        const response = await request(app)
        .get('/projects/all')
    expect(response.statusCode).toBe(401)
    expect(response.body.message).toBe('Access Denied. No api-key provided')


    })

    test("GET/projects/all/  Request with wrong API key-> Returns status 404", async () => {
        api_key = "420_xXC00L_H4XxX04RXx_6969"
        const response = await request(app)
        .get('/projects/all')
        .set('web-api-key', api_key)

    expect(response.statusCode).toBe(403)
    expect(response.body.message).toBe('Access Denied. Invalid api-key')


    })
})