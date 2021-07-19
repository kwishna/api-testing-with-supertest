import { expect } from 'chai';
import faker from 'faker';
import supertest from 'supertest';

describe('https://gorest.co.in/', () => {

    it('8. PUT /users:id', (done) => {
        const URL = 'https://gorest.co.in/public/v1';
        const body = {
                        // 'name': `${faker.name.firstName()} ${faker.name.lastName()}`,
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
            .put(`/users/${faker.datatype.number({max: 1789, min: 1782})}`)
            .set(headers)
            .send(body)
            .end((err, res) => {
                console.log(res.body);
                expect(res.status).to.equal(200);
                done();
            });
    });
});
