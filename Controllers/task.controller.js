const { db } = require('../Database/DBconfig')

const createTask = async (req, res) => {
  try {
    const CourseDetails = await db.query("SELECT course_name FROM COURSE WHERE course_id = $1", [req.body.course_id]);
    const courseName = CourseDetails.rows[0]?.course_name;
    if (courseName) {
      const data = req.body;
      db.query("INSERT INTO TASKS(course_id,course_name,project,assessment,assignments ) VALUES ($1, $2, $3,$4,$5)", [data.course_id, courseName, data.project,data.assessment,data.assignments])
        .then(() => {
          return res.status(201).json({ success: true, message: "Task created successfully!" });
        })
        .catch((error) => {
          return res.status(401).json({ success: false, message: error.message, });
        })
    } 
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message, }); 
  }
}




module.exports = { createTask };