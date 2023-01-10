const express = require("express")
const router = express.Router();
const userController = require("../controlllers/userController")
const studentsController = require("../controlllers/studentsController")

router.get("/profile", userController.profile)
router.get("/signup", userController.signup)
router.get("/signin", userController.signin)
router.get("/students", userController.students)

router.post("/create", userController.create)
router.post("/createSession", userController.createSession)
router.post("/addstudents", studentsController.addstudents)
router.get("/deleteStudent", userController.deleteStudent)

module.exports = router