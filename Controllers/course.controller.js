const { db } = require("../Database/DBconfig");

const createCourse = async (req, res) => {
  try {
    const existingCourse = await db.query(
      'SELECT * FROM "course" WHERE course_name = $1',
      [req.body.course_name]
    );
    const mentorObject = await db.query(
      "SELECT mentor_id FROM mentor WHERE mentor_name = $1",
      [req.body.mentor_name]
    );
    const course = existingCourse.rows[0]?.course_name;
    const mentor_id = mentorObject.rows[0]?.mentor_id;

    if (!mentor_id) {
      return res
        .status(401)
        .json({ success: false, message: "Mentor doesn't exist" });
    }

    if (course) {
      return res
        .status(401)
        .json({ success: false, message: "Course already exists" });
    } else {
      const data = req.body;

      // Insert data into the 'course' table and capture the 'course_id'
      const courseInsertQuery = `
      WITH course_key AS (
        INSERT INTO course (course_name, duration, fees, mentor_id, no_of_students)
        VALUES ($1, $2, $3, $4, 0)
        RETURNING course_id
      )
      INSERT INTO course_content (course_id, project, assessments, description, tagline, syllabus)
      SELECT course_key.course_id, $5, $6, $7, $8, $9
      FROM course_key;
      
      -- Insert the course_id into the course_sessions table
      INSERT INTO course_sessions (course_id, session_data)
      VALUES (course_key.course_id, null);
    `;
      await db.query(courseInsertQuery, [
        data.course_name,
        data.duration,
        data.fees,
        mentor_id,
        data.project,
        data.assessments,
        data.description,
        data.tagline,
        data.syllabus,
      ]);

      return res
        .status(201)
        .json({ success: true, message: "Course created successfully!" });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const deleteCourse = async (req, res) => {
  try {
    const existingCourse = await db.query(
      "DELETE FROM course WHERE course_name = $1",
      [req.body.course_name]
    );
    if (existingCourse.rowCount === 1) {
      return res.status(200).json({
        success: true,
        message: "Course deleted successfully",
      });
    } else {
      return res.status(500).json({
        //course is not available or duplicates courses are available (rowCount>2)
        success: false,
        message: "Something went wrong",
      });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const createSession = async (req, res) => {
  try {
    const response = await db.query(
      "UPDATE course_sessions SET session_data = jsonb_set(session_data,$1) WHERE course_id = $2",
      [req.body.session_data, req.body.course_data]
    );

    if (response.rowCount === 1) {
      res
        .status(201)
        .json({ success: true, message: "session created successfully" });
    } else {
      res
        .status(401)
        .json({ success: false, message: "something went wrong!" });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const getCourse = async (req, res) => {
  try {
    const CourseObject = await db.query(
      "SELECT c.*, m.mentor_name FROM course c JOIN mentor m ON c.mentor_id = m.mentor_id"
    );
    const courses = CourseObject.rows;

    if (courses) {
      return res.status(200).json({
        success: true,
        message: "Courses fetched successfully",
        courseData: courses,
      });
    } else {
      return res.status(500).json({
        success: false,
        message: "Something went wrong!Courses not fetched",
      });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const getCourseContent = async (req, res) => {
  try {
    const CourseObject = await db.query(
      "SELECT * FROM course_content cc join course c on c.course_id=cc.course_id "
    );
    const courses = CourseObject.rows;
    if (courses) {
      return res.status(200).json({
        success: true,
        message: "CoursesData fetched successfully",
        courseContent: courses,
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

module.exports = {
  createCourse,
  deleteCourse,
  getCourse,
  getCourseContent,
  createSession,
};
