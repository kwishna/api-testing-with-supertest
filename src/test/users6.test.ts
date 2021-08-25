import supertest, { Response } from 'supertest';
import { expect } from 'chai';
import faker from 'faker';

describe('https://gorest.co.in/', () => {
    it('10. GET /users', async () => {
        const URL = 'https://gorest.co.in/public/v1';
        const headers = {
            Authorization: `Bearer ${process.env.API_KEY}`,
            'Content-Type': 'application/json',
            Accept: 'application/json',
        };

        const res: Response = await supertest(URL).get(`/users`).set(headers);
        expect(res.status).to.equal(200);
        console.log(res.body);
    });

    it('11. GET /users/:id', async () => {
        const URL = 'https://gorest.co.in/public/v1';
        const headers = {
            Authorization: `Bearer ${process.env.API_KEY}`,
            'Content-Type': 'application/json',
            Accept: 'application/json',
        };

        const res: Response = await supertest(URL)
            .get(`/users/1820`)
            .set(headers);
        expect(res.status).to.equal(200);
        console.log(res.body);
    });

    it('12. POST /users', async () => {
        const URL = 'https://gorest.co.in/public/v1';
        const headers = {
            Authorization: `Bearer ${process.env.API_KEY}`,
            'Content-Type': 'application/json',
            Accept: 'application/json',
        };
        const body = {
            name: `${faker.name.firstName()} ${faker.name.lastName()}`,
            email: faker.internet.email(),
            gender: faker.random.arrayElement(['male', 'female']),
            status: faker.random.arrayElement(['active', 'inactive']),
        };
        const res: Response = await supertest(URL)
            .post(`/users`)
            .set(headers)
            .send(body);
        expect(res.status).to.equal(201);
        console.log(res.body);
    });
});
