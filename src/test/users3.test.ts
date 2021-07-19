import { expect } from 'chai';
import faker from 'faker';
import supertest from 'supertest';

describe('https://gorest.co.in/', () => {
    it('7. POST /users', (done) => {
        const URL = 'https://gorest.co.in/public/v1';
        const body = {
                        'name': `${faker.name.firstName()} ${faker.name.lastName()}`,
                        'email': faker.internet.email(),
                        'gender': faker.random.arrayElement(['male', 'female']),
                        'status': faker.random.arrayElement(['active', 'inactive']),
                    }
        const headers = {
            'Authorization': `Bearer ${process.env.API_KEY}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        };
        supertest(URL)
            .post('/users')
            .set(headers)
            .send(body)
            .end((err, res) => {
                console.log(res.body);
                expect(res.status).to.equal(201);
                done();
            });
    });
});
