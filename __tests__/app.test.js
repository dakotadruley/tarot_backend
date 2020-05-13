const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../lib/app');

describe('tarot_backend routes', () => {
  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });
});
