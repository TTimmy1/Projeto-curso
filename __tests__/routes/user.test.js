const request = require('supertest')

const app = require('../../src/app')

test('deve listar todos os usuarios', () => {
    return request (app).get('/users')
    .then((res) => {
        expect(res.status).toBe(200);
        expect(res.body.length).toBeGreaterThan(0);
    })
})

test('deve inserir usuario com sucesso', () => {
    const mail = `${Date.now()}@mail.com`
    return request(app).post('/users')
      .send({ name: 'walter mitty', mail, passwd: '123456'})
      .then((res) => {
          expect(res.status).toBe(201)
          expect(res.body.name).toBe('walter mitty')
      })
})