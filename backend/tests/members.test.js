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

    const api_key = process.env.API_KEY
    var memberId = '';

    // Create member
    test('POST /members/ -> should return status 201', async () => {
        
        const response = await request(app)
            .post('/members/')
            .set('web-api-key', api_key)
            .send({
                name: 'Demo user 1',
                role: 'Senior Developer'
            })
        expect(response.statusCode).toBe(200)
        memberId = response.body._id;
    })
    // Get a member
    test('GET /members/:memberId -> status code should be 200', async () => {
        const response = await request(app)
            .get('/members/' + memberId)
            .set('web-api-key', api_key) // set the token in the header
        expect(response.statusCode).toBe(200)
    })

    // Get all members
    test('GET /members/all -> status code should be 200', async () => {
        const response = await request(app)
            .get('/members/all')
            .set('web-api-key', api_key)
        expect(response.statusCode).toBe(200)
    })

    // Update a member
    test('PUT /members/:memberId -> should return status 200 with updated student info', async () => {
        const response = await request(app)
            .put('/members/' + memberId)
            .set('web-api-key', api_key) // set the token in the header
            .send({
                name: 'Demo User 2',
                role: 'New here'
            })

        expect(response.statusCode).toBe(200) // expect the status code to be 200
        expect(response.body.message).toBe('Member Updated')
    })

    // Delete a member
    test('DELETE /members/:memberId -> should return status 200', async () => {
        const response = await request(app)
            .delete('/members/' + memberId)
            .set('web-api-key', api_key) // set the token in the header
        expect(response.statusCode).toBe(200)
    })
})
