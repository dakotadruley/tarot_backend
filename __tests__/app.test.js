require('dotenv').config();

const connect = require('../lib/utils/connect');
const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../lib/app');

describe('tarot_backend routes', () => {
  beforeAll(() => {
    connect();
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(() => {
    mongoose.connection.close();
  });

  it('creates a card via POST', () => {
    return request(app)
      .post('/api/v1/cards')
      .send({
      name: 'Empress',
      number: 3,
      image: 'URL',
      description: 'Dope Queen'
      })
      .then(res => {
        expect(res.body).toEqual({
        _id: expect.any(String),
        name: 'Empress',
        number: 3,
        image: 'URL',
        description: 'Dope Queen',
        __v: 0
        });
      });
  });
});
