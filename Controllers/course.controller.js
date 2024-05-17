const { db } = require('../Database/DBconfig')

const createCourse = async (req, res) => {
  try {
    const existingCourse = await db.query("SELECT * FROM course WHERE course_name = $1", [req.body.course_name]);
    const mentorObject= await db.query("SELECT mentor_id FROM mentor WHERE mentor_name = $1", [req.body.mentor_name]);
    const course = existingCourse.rows[0]?.course_name;
    const mentor_id=mentorObject.rows[0]?.mentor_id
    if(mentor_id){
      return res.status(401).json({ success: false, message: "Mentor doesn't exist" });
    }
    if (course) {
      return res.status(401).json({ success: false, message: "Course already exists" });
    } else {
      const data = req.body;
      db.query("INSERT INTO COURSE(course_name, duration, fees ,mentor_id,no_of_students) VALUES ($1, $2, $3,$4,$5)", [data.course_name, data.duration, data.fees,mentor_id,0])
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

const deleteCourse = async (req, res) => {
  try {
    const existingCourse = await db.query("DELETE FROM course WHERE course_name = $1", [req.body.course_name]);
    if(existingCourse.rowCount===1){
      return res.status(200).json({
        success:true,
        message:"Course deleted successfully"
      })
    }
    else{
      return res.status(500).json({ //course is not available or duplicates courses are available (rowCount>2)
        success:false,
        message:"Something went wrong"
      })
    }

  } catch (error) {
    return res.status(500).json({ success: false, message: error.message, });
  }
}

const getCourse = async (req, res) => {
  try {
    const CourseObject = await db.query("SELECT * FROM course ");
    const courses = CourseObject.rows;
    // console.log(courses)
    if (courses) {
      return res.status(200).json({ success: true, message: "Courses fetched successfully",courseData:courses});
    } else {
      return res.status(500).json({ success: false, message: "Something went wrong!Courses not fetched" });
    }
  }catch (error) {
    return res.status(500).json({ success: false, message: error.message, });
  }
}




module.exports = { createCourse,deleteCourse,getCourse };

