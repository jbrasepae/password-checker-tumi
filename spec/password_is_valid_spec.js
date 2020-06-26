const {passwordIsValid} = require("../src/password_checker")

describe("passwordIsValid",function(){
    it('should check if password exist', function(){
        expect(function() {passwordIsValid(null)}).toThrow(new Error("password should exist"))
    })
    it('should be longer than 8 characters', function(){
        expect(function() {passwordIsValid("tumi")}).toThrow(new Error("it should have longer than 8 character"))
    })
    it('should have atleast one lowercase letter', function(){
        expect(function() {passwordIsValid("TUMIIIIIIBOI")}).toThrow(new Error("it should have atleast one lowercase letter"))
    })
    it('should have atleast one uppercase letter', function(){
        expect(function() {passwordIsValid("tummiiiebo")}).toThrow(new Error("it should have atleast one uppercase letter"))
    })
    it('should have atleast one digit', function(){
        expect(function() {passwordIsValid("Tumiee@yboi")}).toThrow(new Error("it should have atleast one digit"))
    })
    it('should have atleast one special character', function(){
        expect(function() {passwordIsValid("Tumiee27bboi")}).toThrow(new Error("it should have atleast one special character"))
    })
    it('should test if password is valid',function(){
        expect(passwordIsValid("Tumieboity@27")).toBe("password is valid")
    })
})