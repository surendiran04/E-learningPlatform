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

const {
  createCourse,
  deleteCourse,
  getCourse,
  getCourseContent,
  createSession,
  getSession
} = require("../Controllers/course.controller");

const {
  enrollCourse, getStudentCourse,  getStudent,getMentor,getStudentByCourse,updateAttendance,getAttendance
} = require("../Controllers/batch.controller")

const {
  makePayment
} = require("../Controllers/payment.controller")

const AuthRouter = require("express").Router();
const courseRouter = require("express").Router();

AuthRouter.post("/studentSignUp", createStudent);
AuthRouter.post("/studentSignin", signInStudent);
AuthRouter.post("/studentForgotPassword", forgotPasswordStudent);
AuthRouter.patch("/studentResetPassword/:id/:token", updatePassStudent);

AuthRouter.post("/mentorSignUp", createMentor);
AuthRouter.post("/mentorSignin", signInMentor);
AuthRouter.post("/mentorForgotPassword", forgotPasswordMentor);
AuthRouter.patch("/mentorResetPassword/:id/:token", updatePassMentor);

courseRouter.get("/getStudent", getStudent);
courseRouter.get("/getMentor", getMentor);

courseRouter.post("/createCourse", createCourse);
courseRouter.post("/deleteCourse", deleteCourse);
courseRouter.get("/getCourse", getCourse);
courseRouter.get("/getCourseContent", getCourseContent);
courseRouter.post("/createSession", createSession); 
courseRouter.get("/getSession/:id",getSession); 
courseRouter.post("/getAttendance",getAttendance);

courseRouter.post("/enrollCourse",   enrollCourse);
courseRouter.post("/getStudentCourse", getStudentCourse);  //my courses 
courseRouter.get("/getStudentByCourse/:id", getStudentByCourse);
courseRouter.post("/updateAttendance", updateAttendance ); 

courseRouter.post("/makePayment",  makePayment);

module.exports ={ AuthRouter,courseRouter};