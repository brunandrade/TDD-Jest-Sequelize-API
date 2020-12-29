const EmailValidator = require("email-validator");

module.exports = {
  isValidEmail(value) {
    return EmailValidator.validate(value);
  },
};
