const request = require("supertest");
const app = require("../../src/app");
const factory = require("../factories");
const truncate = require("../utils/truncate");

describe("User Session", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("should register a new User using register route", async () => {
    const user = await factory.create("User", {
      password: "123",
    });

    const response = await request(app).post("/register").send({
      name: user.name,
      email: user.email,
      password: user.password,
    });

    expect(response.status).toBe(200);
  });

  it("should update a User using update route", async () => {
    const user = await factory.create("User", {
      password: "123",
    });

    const response = await request(app)
      .put(`/${user.id}/update`)
      .set("Authorization", `Bearer ${user.generateToken()}`)
      .send({
        name: user.name,
        email: user.email,
        password: user.password,
      });

    expect(response.status).toBe(200);
  });

  it("should delete a User using delete route", async () => {
    const user = await factory.create("User", {
      password: "123",
    });

    const response = await request(app)
      .delete(`/${user.id}/delete`)
      .set("Authorization", `Bearer ${user.generateToken()}`)
      .send({
        name: user.name,
        email: user.email,
        password: user.password,
      });

    expect(response.status).toBe(200);
  });

  it("should list all users using index route", async () => {
    const user = await factory.create("User", {
      password: "123123",
    });

    const response = await request(app)
      .get("/index")
      .set("Authorization", `Bearer ${user.generateToken()}`);

    expect(response.status).toBe(200);
  });
});
