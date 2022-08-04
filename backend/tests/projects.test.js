const mongoose = require('mongoose')
const request = require('supertest')

const app = require('../src/app')


describe('Test projects routes', () => {
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
        await db.collection('projects').deleteMany({})
        await mongoose.connection.close()
    })
    jest.setTimeout(20000) // added a timeout to avoid the test to fail as the MongoDB connection is slow

    const api_key = process.env.API_KEY
    var projectId = '';

    // Create a project
    test('POST /api/projects/ -> should return status 201', async () => {
        const response = await request(app)
            .post('/api/projects/')
            .set('api_key', api_key)
            .send({
                name: 'Project 1',
                description: 'This is a test project.',
                ongoing: true
            })
        expect(response.statusCode).toBe(201)
        projectId = response.body._id;
    })
    // Get a project
    test('GET /api/projects/:projectId -> status code should be 200', async () => {
        const response = await request(app)
            .get('/api/projects/' + projectId)
            .set('api-key', api_key) // set the token in the header
        expect(response.statusCode).toBe(200)
    })

    // Get all projects
    test('GET /api/projects/all -> status code should be 200', async () => {
        const response = await request(app)
            .get('/api/members/all')
            .set('api-key', api_key)
        expect(response.statusCode).toBe(200)
    })

    // Update a project
    test('PUT /api/projects/:projectId -> should return status 200 with updated student info', async () => {
        const response = await request(app)
            .put('/api/projects/' + projectId)
            .set('api-key', api_key) // set the token in the header
            .send({
                name: 'Project 2',
                description: 'This is an updated test project.',
                ongoing: false
            })

        expect(response.statusCode).toBe(200) // expect the status code to be 200
        expect(response.body.message).toBe('Member Updated')
    })

    // Delete a project
    test('DELETE /api/projects/:projectId -> should return status 200', async () => {
        const response = await request(app)
            .delete('/api/projects/' + projectId)
            .set('api-key', api_key) // set the token in the header
        expect(response.statusCode).toBe(200)
    })
})