const {passwordIsValid} = require("../src/password_checker")

describe("passwordIsValid",function(){
    it('should check if password exist', function(){
        expect(function() {passwordIsValid(null)}).toThrow(new Error("password should exist"))
    })
    it('should be longer than 8 characters', function(){
        expect(function() {passwordIsValid("tumi")}).toThrow(new Error("it should be longer than 8 character"))
    })
    it('should have atleast one lowercase letter', function(){
        expect(function() {passwordIsValid("TUMIIIIII")}).toThrow(new Error("it should have atleast one lowercase letter"))
    })
    it('should have atleast one uppercase letter', function(){
        expect(function() {passwordIsValid("tummiiie")}).toThrow(new Error("it should have atleast one uppercase letter"))
    })
    it('should have atleast one digit', function(){
        expect(function() {passwordIsValid("Tumiee@y")}).toThrow(new Error("it should have atleast one digit"))
    })
    it('should have atleast one special character', function(){
        expect(function() {passwordIsValid("Tumiee27")}).toThrow(new Error("it should have atleast one special character"))
    })
})