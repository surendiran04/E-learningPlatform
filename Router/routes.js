const {
  createStudent,
  signInStudent,
  forgotPasswordStudent,
  updatePassStudent
} = require("../Controllers/student_Authentication.controller");

const {
  createMentor,
  signInMentor,
  forgotPasswordMentor,
  updatePassMentor
} = require("../Controllers/mentor_Authentication.controller");

const AuthRouter = require("express").Router();

AuthRouter.post("/studentSignUp", createStudent);
AuthRouter.post("/studentSignin", signInStudent);
AuthRouter.post("/studentForgotPassword", forgotPasswordStudent);
AuthRouter.patch("/studentResetPassword/:id/:token", updatePassStudent);

AuthRouter.post("/mentorSignUp",createMentor);
AuthRouter.post("/mentorSignin", signInMentor);
AuthRouter.post("/mentorForgotPassword", forgotPasswordMentor);
AuthRouter.patch("/mentorResetPassword/:id/:token", updatePassMentor);

module.exports = AuthRouter;
