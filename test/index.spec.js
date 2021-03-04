const supertest = require("supertest");
const assert = require("assert");
const app = require("../server.js");

// Testing GET routes
describe("GET /", function () {
  it("it should has status code 200", function (done) {
    supertest(app)
      .get("/")
      .expect(200)
      .end(function (err, res) {
        if (err) done(err);
        done();
      });
  });

  it("it should has status code 200 if it returning the products", function (done) {
    supertest(app)
      .get("/products")
      .expect(200)
      .end(function (err, res) {
        if (err) done(err);
        done();
      });
  });

  it("it should has status code 200 if it returning the users", function (done) {
    supertest(app)
      .get("/users")
      .expect(200)
      .end(function (err, res) {
        if (err) done(err);
        done();
      });
  });
});

// Testing POST routes
describe("POST /", function () {
  it("it shoud return status code 201 if the user created", function (done) {
    supertest(app)
      .post("/users")
      .send({
        username: "bbgrtsegb",
        user_pass: "zzzz",
        email: "zzz@rgmail.com",
        loc: "naz",
      })
      .expect(201)
      .end(function (err, res) {
        if (err) done(err);
        done();
      });
  });

  it("it shoud return status code 201 if the product added", function (done) {
    supertest(app)
      .post("/products")
      .send({
        pro_name: "Painting Pen",
        pic_url: "1.png",
        descr: "paint with this pen",
        price: 90,
        category: "pen",
      })
      .expect(201)
      .end(function (err, res) {
        if (err) done(err);
        done();
      });
  });
});

// Testing DELETE routes
describe("DELETE /", function () {
  it("it shoud return status code 204 if the product deleted", function (done) {
    supertest(app)
      .delete("/products/20")
      .expect(204)
      .end(function (err, res) {
        if (err) done(err);
        done();
      });
  });

  ///comment/:id
  it("it shoud return status code 204 if the comment deleted", function (done) {
    supertest(app)
      .delete("/comment/20")
      .expect(204)
      .end(function (err, res) {
        if (err) done(err);
        done();
      });
  });
});
