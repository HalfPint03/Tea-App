const app = require("./app");
const request = require("supertest");
const db = require("./db/connection");
const seed = require("./db/seeds/seed");
const data = require("./db/data/test-data/index");

beforeAll(() => {
  return seed(data);
});
afterAll(() => {
  return db.end();
});

describe("/api/teas", () => {
    test("GET 200: Should return an array of all the teas", () => {
      return request(app)
        .get("/api/teas")
        .expect(200)
        .then(({body}) => {
          body.rows.map((tea) => {
            expect(tea).toHaveProperty('name')
            expect(tea).toHaveProperty('slug')
            expect(tea).toHaveProperty('altnames')
            expect(tea).toHaveProperty('image')
            expect(tea).toHaveProperty('origin')
            expect(tea).toHaveProperty('type')
            expect(tea).toHaveProperty('caffeine')
            expect(tea).toHaveProperty('caffeinelevel')
            expect(tea).toHaveProperty('description')
            expect(tea).toHaveProperty('colordescription')
            expect(tea).toHaveProperty('tastedescription')
            expect(tea).toHaveProperty('sources')
          })
        });
    });
  });
  describe('/api/energised_tea', () => {
    test('GET 200: Should return a single tea from the energised teas', () => {
      return request(app)
      .get('/api/energised_tea')
        .expect(200)
        .then(({body}) => {
          expect(body.rows).toHaveProperty('name')
            expect(body.rows).toHaveProperty('slug')
            expect(body.rows).toHaveProperty('altnames')
            expect(body.rows).toHaveProperty('image')
            expect(body.rows).toHaveProperty('origin')
            expect(body.rows).toHaveProperty('type')
            expect(body.rows).toHaveProperty('caffeine')
            expect(body.rows).toHaveProperty('caffeinelevel')
            expect(body.rows).toHaveProperty('description')
            expect(body.rows).toHaveProperty('colordescription')
            expect(body.rows).toHaveProperty('tastedescription')
            expect(body.rows).toHaveProperty('sources')
        })
    });
  })
  describe('/api/focused_tea', () => {
    test('GET 200: Should return a single tea from, the focused teas', () => {
      return request(app)
      .get('/api/focused_tea')
        .expect(200)
        .then(({body}) => {
          expect(body.rows).toHaveProperty('name')
            expect(body.rows).toHaveProperty('slug')
            expect(body.rows).toHaveProperty('altnames')
            expect(body.rows).toHaveProperty('image')
            expect(body.rows).toHaveProperty('origin')
            expect(body.rows).toHaveProperty('type')
            expect(body.rows).toHaveProperty('caffeine')
            expect(body.rows).toHaveProperty('caffeinelevel')
            expect(body.rows).toHaveProperty('description')
            expect(body.rows).toHaveProperty('colordescription')
            expect(body.rows).toHaveProperty('tastedescription')
            expect(body.rows).toHaveProperty('sources')
        })
    });
  });
  describe('/api/happy_tea', () => {
    test('GET 200: Should return a single tea from the happy teas', () => {
      return request(app)
      .get('/api/happy_tea')
        .expect(200)
        .then(({body}) => {
          expect(body.rows).toHaveProperty('name')
            expect(body.rows).toHaveProperty('slug')
            expect(body.rows).toHaveProperty('altnames')
            expect(body.rows).toHaveProperty('image')
            expect(body.rows).toHaveProperty('origin')
            expect(body.rows).toHaveProperty('type')
            expect(body.rows).toHaveProperty('caffeine')
            expect(body.rows).toHaveProperty('caffeinelevel')
            expect(body.rows).toHaveProperty('description')
            expect(body.rows).toHaveProperty('colordescription')
            expect(body.rows).toHaveProperty('tastedescription')
            expect(body.rows).toHaveProperty('sources')
        })
    });
  });
  describe('/api/relaxed_tea', () => {
    test('GET 200: Should return a single tea from the relaxed teas', () => {
      return request(app)
      .get('/api/relaxed_tea')
        .expect(200)
        .then(({body}) => {
          expect(body.rows).toHaveProperty('name')
            expect(body.rows).toHaveProperty('slug')
            expect(body.rows).toHaveProperty('altnames')
            expect(body.rows).toHaveProperty('image')
            expect(body.rows).toHaveProperty('origin')
            expect(body.rows).toHaveProperty('type')
            expect(body.rows).toHaveProperty('caffeine')
            expect(body.rows).toHaveProperty('caffeinelevel')
            expect(body.rows).toHaveProperty('description')
            expect(body.rows).toHaveProperty('colordescription')
            expect(body.rows).toHaveProperty('tastedescription')
            expect(body.rows).toHaveProperty('sources')
        })
    });
  });