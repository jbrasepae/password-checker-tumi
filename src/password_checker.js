function passwordIsValid(password) {
  const len = /.{9,}/;
  const lowercase = /[a-z]/g;
  const uppercase = /[A-Z]/g;
  const digit = /\d/g;
  const specialChar = /\W/g;

  if (password == null) {
    throw Error("password should exist");
  }
  if (!password.match(len)) {
    throw Error("it should have longer than 8 character");
  }
  if (!password.match(lowercase)) {
    throw Error("it should have atleast one lowercase letter");
  }
  if (!password.match(uppercase)) {
    throw Error("it should have atleast one uppercase letter");
  }
  if (!password.match(digit)) {
    throw Error("it should have atleast one digit");
  }
  if (!password.match(specialChar)) {
    throw Error("it should have atleast one special character");
  }
  if (
    password.match(len) &&
    password.match(lowercase) &&
    password.match(uppercase) &&
    password.match(digit) &&
    password.match(specialChar)
  ) {
    return("password is valid");
  }
}
console.log(passwordIsValid("Tumie@boi2"))

function passwordIsOk(password) {
  const len = /.{9,}/;
  const lowercase = /[a-z]/g;
  const uppercase = /[A-Z]/g;
  const digit = /\d/g;
  const specialChar = /\W/g;
  let passwordStrength = 0;

  if(password != ""){
    passwordStrength += 1;
  }

  if (password.match(len)) {
    passwordStrength += 1;
  }
  if (password.match(lowercase)) {
    passwordStrength += 1;
  }
  if (password.match(uppercase)) {
    passwordStrength += 1;
  }
  if (password.match(digit)) {
    passwordStrength += 1;
  }
  if (password.match(specialChar)) {
    passwordStrength += 1;
  }
  if (passwordStrength < 3 || !password.match(len)) {
    return false;
  }
  else{
  return true;
  }
}
console.log(passwordIsOk("boitymellow2"));
module.exports = {passwordIsValid, passwordIsOk };
