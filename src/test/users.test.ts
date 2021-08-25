import { expect } from 'chai';
import supertest, { SuperAgentTest, SuperTest, Test } from 'supertest';

describe('https://gorest.co.in/', () => {
    const obj = {
        'access-token': process.env.API_KEY,
    };

    // Using .query() Method & end() For Response!
    it('1. GET /users', (done) => {
        const URL = 'https://gorest.co.in/public-api/';
        let request: SuperTest<Test> = supertest(URL);
        request
            .get('/users')
            .query(obj)
            .end((err, res) => {
                console.log(res.status);
                expect(res.status).to.equal(200);
                done();
            });
    });

    // Using .query() Method & then() For Promise!
    it('2. GET /users', () => {
        const URL = 'https://gorest.co.in/public-api/';
        let request: SuperTest<Test> = supertest(URL);
        return request
            .get('/users')
            .query(obj)
            .then((res) => {
                expect(res.status).to.equal(201);
            });
    });

    // Using agent & .query(obj) For Query Parameter!
    it('3. GET /users', (done) => {
        const URL = 'https://gorest.co.in/public-api/';
        const agent: SuperAgentTest = supertest.agent(URL);
        agent
            .get('/users')
            .query(obj)
            .end((err, res) => {
                console.log(res.status);
                expect(res.status).to.equal(200);
                done();
            });
    });

    // Without agent & Using Query Method For Query Parameter!
    it('4. GET /users', (done) => {
        const URL = 'https://gorest.co.in/public-api/';
        const agent: SuperAgentTest = supertest.agent(URL);
        agent
            .get(`/users?access-token=${process.env.API_KEY}`)
            .end((err, res) => {
                console.log(res.status);
                expect(res.status).to.equal(200);
                done();
            });
    });
});
