function passwordIsValid(password) {
  //const regex1 = null;
  const regex2 = /.{8,}/;
  const regex3 = /[a-z]/g;
  const regex4 = /[A-Z]/g;
  const regex5 = /\d/g;
  const regex6 = /\W/g;

  if (password == null) {
    throw Error("password should exist");
  }
  if (!password.match(regex2)) {
    throw Error("it should be longer than 8 character");
  }
  if (!password.match(regex3)) {
    throw Error("it should have atleast one lowercase letter");
  }
  if (!password.match(regex4)) {
    throw Error("it should have atleast one uppercase letter");
  }
  if (!password.match(regex5)) {
    throw Error("it should have atleast one digit");
  }
  if (!password.match(regex6)) {
    throw Error("it should have atleast one special character");
  }
  if (
    password.match(regex2) &&
    password.match(regex3) &&
    password.match(regex4) &&
    password.match(regex5) &&
    password.match(regex6)
  ) {
    console.log("password is valid");
  }
  //const regex = /(?=.*[a-z])(?=.*[\d])(?=.*[A-Z])(?=.*[@!#$%^&*?])(.{8,})/g
  //return regex.test(password)
}
passwordIsValid("Tumie@2sz");
module.exports = {passwordIsValid};

// function passwordIsOk(password) {
//   let passed = 0;
//   if (
//     password.match(/.{8,}/) &&
//     password.match(/[a-z]/g) &&
//     password.match(/[A-Z]/g) &&
//     password.match(/\d/g) &&
//     password.match(/[@!#$%^&*?]/)
//   ){
//       passed += 1;
//   } 
// //return true;
//   if (passed > 3){
//       return true
//   }
//   if(!password.match(/.{8,}/)) {
//     console.log("password is never ok");
//   } 
// else {
//     return false;
//   }
// }
// console.log(passwordIsOk(""));
// module.exports = { passwordIsOk };
