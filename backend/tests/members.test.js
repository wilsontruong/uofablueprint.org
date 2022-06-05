const mongoose = require('mongoose')
const request = require('supertest')

const app = require('../src/app')

/**
 * Currently runs the test with jest which is not the recommended
 * way to test mongoose: https://mongoosejs.com/docs/jest.html.
 */
describe('Test the root path', () => {
    test('It should response the GET method', async () => {
        const res = await request(app).get('/members')
        expect(res.statusCode).toBe(200)
        expect(res.body[0]).toHaveProperty('name')
    })
})
