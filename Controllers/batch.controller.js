const { db } = require('../Database/DBconfig')

const enrollCourse = async (req, res) => {
    try {

      const CourseObject = await db.query("SELECT course_name,mentor_id FROM course where course_id=$1 ",[req.body.course_id]);
      const courseDetails = CourseObject.rows[0];
      if (courseDetails) {
        db.query("INSERT INTO BATCH(batch_name, course_id,student_id ,mentor_id) VALUES ($1, $2, $3,$4)", [courseDetails.course_name, req.body.course_id,req.body.student_id,courseDetails.mentor_id])
        .then(() => {
          return res.status(201).json({ success: true, message: "Enrolled successfully!" });
        })
        .catch((error) => {
          return res.status(401).json({ success: false, message: error.message });
        })
      } else {
        return res.status(404).json({ success: false, message: "Course enrollment failed" });
      }
    }catch (error) {
      return res.status(500).json({ success: false, message: error.message, });
    }
  }

  module.exports = {enrollCourse };
 