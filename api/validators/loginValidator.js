const Validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function registerValidator(data) {
  let errors = "";

  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (Validator.isEmpty(data.email)) {
    errors = "Email is required";
  }

  if (Validator.isEmpty(data.password)) {
    errors = "Password is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
