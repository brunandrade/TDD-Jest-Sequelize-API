const { User } = require("../../src/models");
const bycrypt = require("bcryptjs");
const truncate = require("../utils/truncate");
const Validator = require("../../src/services/Validators");

describe("User", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("should create a new User", async () => {
    const user = await User.create({
      name: "Bruna Andrade",
      email: "brunar2d2@gmail.com",
      password: "23423423",
    });

    expect(user.email).toBe("brunar2d2@gmail.com");
  });

  it("should encrpt user password", async () => {
    const user = await User.create({
      name: "Bruna Andrade",
      email: "brunar2d2@gmail.com",
      password: "123",
    });

    const compareHash = await bycrypt.compare("123", user.password_hash);
    expect(compareHash).toBe(true);
  });

  it("should valid user email", async () => {
    const user = await User.create({
      name: "Bruna Andrade",
      email: "brunar2d2@gmail.com",
      password: "123",
    });

    const validator = Validator.isValidEmail(user.email);
    expect(validator).toBe(true);
  });
});
