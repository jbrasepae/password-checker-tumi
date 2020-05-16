const {passwordIsOk} = require("../src/password_checker")

describe('passwordIsOk', function(){
    it('should test if password exist',function(){
        expect(passwordIsOk("")).toBe(false)
    })
    it('should test if password have longer than 8 character',function(){
        expect(passwordIsOk("tumi")).toBe(false)
    })
    it('should test if password have atleats one lowercase letter',function(){
        expect(passwordIsOk("TuuuuMIBOITY")).toBe(true)
    })
    it('should test if password have atleats one uppercase letter',function(){
        expect(passwordIsOk("BoiToEEumel")).toBe(true)
    })
    it('should test if password have atleats one digit',function(){
        expect(passwordIsOk("Tumieb27ooo")).toBe(true)
    })
    it('should test if password have atleats one special character',function(){
        expect(passwordIsOk("Tumiebo@kkk")).toBe(true)
    })
})