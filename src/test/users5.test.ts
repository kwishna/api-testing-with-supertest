import supertest from 'supertest';
import { expect } from 'chai';

describe('https://gorest.co.in/', () => {

    it('9. DELETE /users:id', (done) => {
        const URL = 'https://gorest.co.in/public/v1';
        const headers = {
            'Authorization': `Bearer ${process.env.API_KEY}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        };

        supertest(URL)
            .delete(`/users/1821`)
            .set(headers)
            .end((err, res) => {
                console.log(res.body);
                expect(res.status).to.equal(204);
                done()
            });
    });
});
