import { expect } from 'chai';
import supertest, { SuperAgentTest } from 'supertest';
import {JSONPath} from "jsonpath-plus"

describe('https://gorest.co.in/', () => {
    const obj = {
        'access-token': process.env.API_KEY,
    };
    it('5. GET /users:id', (done) => {
        const URL = 'https://gorest.co.in/public-api/';
        const id = 1;
        const agent: SuperAgentTest = supertest.agent(URL);
        agent
            .get(`/users/${id}?access-token=${process.env.API_KEY}`)
            .query(obj)
            .end((err, res) => {
                console.log(res.status);
                console.log(res.body);
                expect(res.status).to.equal(200);
                done();
            });
    });

    it('6. GET /users/{...filters}', (done) => {
        const URL = 'https://gorest.co.in/public/v1';
        const fltrs = {
            'page': 5
        }
        supertest(URL)
            .get(`/users?access-token=${process.env.API_KEY}`)
            .query(fltrs)
            .end((err, res) => {
                console.log(res.body.data);
                const evenAndInactive = JSONPath({path: "$[?(@.id % 2 == 0 && @.status == 'inactive')]", json: res.body.data})
                console.log(evenAndInactive);
                expect(res.status).to.equal(200);
                done();
            });
    });
});
