const { db } = require("../Database/DBconfig");
const transporter = require("../Utils/sendEmail");

const enrollCourse = async (req, res) => {
  try {
    const email = req.body.email
    const existingStudentObject = await db.query(
      "SELECT * FROM batch WHERE student_id = $1 AND course_id = $2",
      [req.body.student_id, req.body.course_id]
    );
    const existingStudent = existingStudentObject.rows;
    if (existingStudent.length>0) {
      return res
        .status(401)
        .json({
          success: false,
          message: "You are already enrolled in this course",
        });
    }
    const courseObject = await db.query(
      "SELECT course_name, mentor_id FROM course WHERE course_id = $1",
      [req.body.course_id]
    );
    const courseDetails = courseObject.rows[0];
    if (courseDetails) {
      await db.query(
        "INSERT INTO batch (batch_name, course_id, student_id, mentor_id) VALUES ($1, $2, $3, $4)",
        [
          courseDetails.course_name,
          req.body.course_id,
          req.body.student_id,
          courseDetails.mentor_id,
        ]
      );
      await db.query(
        "INSERT INTO payment (course_id, student_id, amount, payment_date) VALUES ($1, $2, $3, NOW())",
        [req.body.course_id, req.body.student_id, req.body.amount]
      );

      await db.query(
        "INSERT INTO progress (course_id, student_id, class_finished) VALUES ($1, $2, 0)",
        [req.body.course_id, req.body.student_id]
      );
    return res
      .status(201)
      .json({ success: true, message: "Enrolled successfully!" });
      // const options = {
      //   from: {
      //     name: "Web Admin",
      //     address: process.env.EMAIL_USER,
      //   },
      //   to: email,
      //   subject: "E-learning course enrollment",
      //   html: `<h2>E-learning</h2>
      //         <h3>Enrollment successful for the course : ${courseDetails.course_name}</h3>
      //       `,
      // };
      // // Send Email
      // transporter.sendMail(options, function (err, info) {
      //   if (err) {
      //     console.log(err)
      //     return res
      //       .status(404)
      //       .json({ success: false, message: "Course enrollment failed" });
      //   } else {
      //     return res
      //       .status(201)
      //       .json({ success: true, message: "Enrolled successfully!" });
      //   }
      // });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const getStudentCourse = async (req, res) => {    
  try {
    const CourseObject = await db.query(
      "SELECT course_id FROM batch where student_id= $1",
      [req.body.student_id]
    );
    const courses = CourseObject.rows;
    if (courses) {
      return res.status(200).json({
        success: true,
        message: "CoursesData fetched successfully",
        course_id: courses,
      });
    } else {
      return res.status(500).json({
        success: false,
        message: "Something went wrong! CoursesContent not fetched",
      });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const getStudent = async (req, res) => {

  try {
    const studentObject = await db.query("SELECT student_name,batch_name,s.student_id,phone,email FROM STUDENT s join batch b on b.student_id=s.student_id");
    const students = studentObject.rows;
    if (students) {
      return res.status(200).json({ success: true, message: "Students fetched successfully",data:students});
    } else {
      return res.status(500).json({ success: false, message: "Something went wrong!" });
    }
  }catch (error) {
    return res.status(500).json({ success: false, message: error.message, });
  }
}

const getMentor = async (req, res) => {
  try {
    const mentorObject = await db.query("SELECT mentor_name,mentor_id,phone,email,course FROM mentor");
    const mentors = mentorObject.rows;
    if (mentors) {
      return res.status(200).json({ success: true, message: "Mentors fetched successfully",data:mentors});
    } else {
      return res.status(500).json({ success: false, message: "Something went wrong!" });
    }
  }catch (error) {
    return res.status(500).json({ success: false, message: error.message, });
  }
}

const updateAttendance = async (req, res) => {
  const { student_ids } = req.body; 
  try {
    for (const student_id of student_ids) {
      // Call the increment_class_finished function for each student
      await pool.query('SELECT increment_class_finished($1)', [student_id]);
    }
    res.status(200).json({ message: 'Attendance updated for all students' });
  }catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = { enrollCourse, getStudentCourse ,getStudent,getMentor,updateAttendance };