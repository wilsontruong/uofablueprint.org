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
    test('POST /api/members/ -> should return status 201', async () => {
        const response = await request(app)
            .post('/api/members/')
            .set('api_key', api_key)
            .send({
                name: 'Demo user 1',
                role: 'Senior Developer'
            })
        expect(response.statusCode).toBe(201)
        memberId = response.body._id;
    })
    // Get a member
    test('GET /api/members/:memberId -> status code should be 200', async () => {
        const response = await request(app)
            .get('/api/students/' + memberId)
            .set('api-key', api_key) // set the token in the header
        expect(response.statusCode).toBe(200)
    })

    // Get all members
    test('GET /api/members/all -> status code should be 200', async () => {
        const response = await request(app)
            .get('/api/members/all')
            .set('api-key', api_key)
        expect(response.statusCode).toBe(200)
    })

    // Update a member
    test('PUT /api/members/:memberId -> should return status 200 with updated student info', async () => {
        const response = await request(app)
            .put('/api/members/' + memberId)
            .set('api-key', api_key) // set the token in the header
            .send({
                name: 'Demo User 2',
                role: 'New here'
            })

        expect(response.statusCode).toBe(200) // expect the status code to be 200
        expect(response.body.message).toBe('Member Updated')
    })

    // Delete a member
    test('DELETE /api/members/:memberId -> should return status 200', async () => {
        const response = await request(app)
            .delete('/api/members/' + memberId)
            .set('api-key', api_key) // set the token in the header
        expect(response.statusCode).toBe(200)
    })
})
