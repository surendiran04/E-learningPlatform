const { db } = require('../Database/DBconfig')

const createCourse = async (req, res) => {
  try {
    const existingCourse = await db.query("SELECT * FROM course WHERE course_name = $1", [req.body.course_name]);
    const course = existingCourse.rows[0]?.course_name;
    if (course) {
      return res.status(401).json({ success: false, message: "Course already exists" });
    } else {
      const data = req.body;
      db.query("INSERT INTO COURSE(course_name, duration, fees ) VALUES ($1, $2, $3)", [data.course_name, data.duration, data.fees])
        .then(() => {
          return res.status(201).json({ success: true, message: "Course created successfully!" });
        })
        .catch((error) => {
          return res.status(401).json({ success: false, message: error.message, });
        })
    }


  } catch (error) {
    return res.status(500).json({ success: false, message: error.message, });
  }
}

// module.exports = { createStudent, signInStudent, forgotPasswordStudent, updatePassStudent };
module.exports = { createCourse };

