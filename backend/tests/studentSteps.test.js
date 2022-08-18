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
    var stepsId = '';
    test('POST /studentsteps/ -> should return status 200', async () => {
        const response = await request(app)
            .post('/studentsteps/')
            .set('api_key', api_key)
            .send({
                number: '69',
                title: 'Memester',
                body: 'Be a memester or go home',
                divider: '|'
            })
        expect(response.statusCode).toBe(200)
        stepsId = response.body._id;
    })

    test('GET /studentsteps/:stepsId -> status code should be 200', async () => {
        const response = await request(app)
            .get('/studentsteps/' + stepsId)
            .set('api-key', api_key) // set the token in the header
        expect(response.statusCode).toBe(200)
    })

    test('GET /studentsteps/all -> status code should be 200', async () => {
        const response = await request(app)
            .get('/studentsteps/all')
            .set('api-key', api_key)
        expect(response.statusCode).toBe(200)
    })

    test('PUT /studentsteps/:stepsId -> should return status 200 with updated student info', async () => {
        const response = await request(app)
            .put('/studentsteps/' + stepsId)
            .set('api-key', api_key) // set the token in the header
            .send({
                number: '40',
                title: 'Memester',
                body: 'Be a memester or go to school',
                divider: '|'
            })
        console.log(response.body)
        expect(response.statusCode).toBe(200) // expect the status code to be 200
        expect(response.body.message).toBe('Step updated!')
    })

        // Delete a project
       test('DELETE /studentsteps/:stepsId -> should return status 200', async () => {
           const response = await request(app)
            .delete('/studentsteps/' + stepsId)
            .set('api-key', api_key) // set the token in the header
            expect(response.statusCode).toBe(200)
        })
})