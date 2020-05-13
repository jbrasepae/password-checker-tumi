const password = "Tumie@27"

function passwordIsValid(password){
    //const regex = /Tumie/ig
    //const regex = /\d/g
    const regex = /(?=.*[a-z])(?=.*[\d])(?=.*[A-Z])(?=.*[@!#$%^&*?]).{8,}/g
    return password.match(regex)
    //return regex.test(password) 
    //return regex.test(password) 
}
//console.log(passwordIsValid("Tumie@27"))
module.exports = {passwordIsValid}

// function passwordIsOk(password){
    
// }