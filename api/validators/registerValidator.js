const Validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function registerValidator(data) {
  let errors = "";

  let usernameRegex = "^(?=[a-zA-Z0-9._]{6,20}$)(?!.*[_.]{2})[^_.].*[^_.]$";

  data.username = !isEmpty(data.username) ? data.username : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (Validator.isEmpty(data.username)) {
    errors = "Username is required";
  }

  if (Validator.isEmpty(data.email)) {
    errors = "Email is required";
  }

  if (Validator.isEmpty(data.password)) {
    errors = "Password is required";
  }

  if (!Validator.isLength(data.username, { min: 6 })) {
    errors = "Create a username atleast 6 characters long";
  }

  if (!data.username.match(usernameRegex)) {
    errors = "Given username contains invalid characters";
  }

  if (!Validator.isEmail(data.email)) {
    errors = "Please enter in the format: name@example.com";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
