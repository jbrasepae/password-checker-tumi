const {passwordIsValid} = require("../src/password_checker")

const password = "Tumie@27"

describe('passwordIsValid',function(){
    it('should exist', function(){
        expect(passwordIsValid(password)).toEqual(['Tumie@27'])
    })
    it('should be longer than 8 characters', function(){
        expect(passwordIsValid(password)).toEqual(['Tumie@27'])
    })
    it('should have atleast one lowecase letter', function(){
        expect(passwordIsValid(password)).toEqual(['?=.*[a-z]'])
    })
})