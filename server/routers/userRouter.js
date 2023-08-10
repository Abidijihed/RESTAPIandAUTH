const router=require("express").Router()
const controllerUser=require("../controllers/user")

router.post("/api/create_user",controllerUser.CreateUser)
router.post("/api/login_user",controllerUser.Login)
module.exports={userRouter:router}