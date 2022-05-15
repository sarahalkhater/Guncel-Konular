const Router = require("express")
const authController = require("../controller/authController")
const router = new Router()
const controller = require("../controller/authController")

const { check } = require("express-validator") //validation 

const controller = new authController()

router.post('/registration',
    [
        check('username', 'username cannot be empty').notEmpty(),
        check('password', 'password must be 4-10 characters long').isLength({ min: 4, max: 10 }), //username veya password bir hata varsa alir controller'a getirir.
    ],
    controller.registration)

module.exports = router