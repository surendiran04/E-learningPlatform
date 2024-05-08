const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 10;
const secret = process.env.secretKey;
const FE_URL= process.env.FRONTEND_URL;
const transporter = require("../Utils/sendEmail");
const { db } = require('../Database/DBconfig')

async function createStudent(req, res) {
  try {
    const existingEmail = await db.query("SELECT * FROM student WHERE email = $1", [req.body.email]);
    const email = existingEmail.rows[0]?.email;
    if (email) {
      return res.status(401).json({ success: false, message: "EmailId already exists" });
    } else {
      const data = req.body;
      if (data.pass) {
        bcrypt.hash(data.pass, saltRounds, function (err, hash) {
          if (err) {
            return res.status(500).json({ success: false, message: "Something went wrong" });
          }
          data.pass = hash;
          db.query("INSERT INTO STUDENT(student_name, batch, course, fees, phone, email, pass) VALUES ($1, $2, $3, $4, $5, $6, $7)", [data.student_name, data.batch, data.course, data.fees, data.phone, data.email, data.pass])
            .then(() => {
              return res.status(201).json({ success: true, message: "Student created successfully!" });
            })
            .catch((error) => {
              return res.status(401).json({ success: false, message:error.message, });
            })
        });
      }
    }
  } catch (error) {
    return res.status(500).json({ success: false, message:error.message, });
  }
}

async function signInStudent(req, res) {
  try {
    const { email, pass } = req.body;

    if (!email) {
      return res.status(401).json({
        success: false,
        message: "Email is missing",
      });
    }
    if (!pass) {
      return res.status(401).json({
        success: false,
        message: "Password is missing",
      });
    }

    await db.query("SELECT student_id,student_name,email,pass FROM student WHERE email = $1", [email])
      .then((response) => {
        if (response.rows[0] && response.rows[0].student_id) {
          bcrypt.compare(pass, response.rows[0].pass).then(function (result) {
            //if result is true then both the pass are crt
            if (result) {
              const token = jwt.sign({ role: ["student"] }, secret, {  //role based authorization
                expiresIn: 60 * 5, //session time
              });
              return res.status(200).json({
                success: true,
                message: "Sign In successful",
                token: token,
                user: response.rows[0].student_name,
              });
            } else {
              return res.status(401).json({
                //having a emailId checking whether entered pass is crt user using the db.pass
                success: false,
                message: "Email Id or Password is invalid!",
              });
            }
          });
        } else {
          return res.status(401).json({
            success: false,
            message: "Account does not exists!",
          });
        }
      })
  }
  catch (error) {
    return res.status(500).json({ success: false, message: error.message,});

  }
}

const forgotPasswordStudent = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({
      success: false,
      message: "Email is missing",
    });
  }
  try {
    const response = await db.query("SELECT student_id FROM student WHERE email = $1", [email]);
    const user_id = response.rows[0].student_id;
    if (response.rows[0] && user_id) {
      const token = await jwt.sign({ id: user_id }, secret, {
        expiresIn: 5 * 60, //session time
      });
      if (token) {
        const options = {
          from: {
            name: "Web Admin",
            address: process.env.EMAIL_USER,
          },
          to: email,
          subject: "Reset Password - Reg",
          html: `<h3>Hello! Here is your New password Link</h3>
                <h5>The Link is valid only for the next 3 minutes</h5>
              <a href="${FE_URL}/resetPassword/${user_id}/${token}">Click here</a>`,
        };
        // Send Email
        transporter.sendMail(options, function (err, info) {
          if (err) {
            return res.status(500).json({
              success: false,
              message: "Error occured!Try after sometime",
            });
          } else {
            return res.status(200).json({
              success: true,
              message: "Email Sent successfully",
              token: token,
            });
          }
        });
      }
    } else {
      return res.status(401).json({
        success: false,
        message: "Account does not exists!",
      });
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


const updatePassStudent = async (req, res) => {
  const password = req.body.pass;
  const { id, token } = req.params;
  if (!id && !token) {
    res
      .status(401)
      .json({ success: false, message: "Unauthorized Access!" });
  }
  try {
    const validuser = await db.query("SELECT student_id FROM student WHERE student_id = $1", [id]);
    const verifyToken = jwt.verify(token, secret);
    if (validuser.rows[0].student_id == verifyToken.id) {
      const newpassword = await bcrypt.hash(password, saltRounds);

      const response = await db.query("UPDATE student SET pass=$1 WHERE student_id = $2", [newpassword, id])
      if (response) {
        res
          .status(201)
          .json({ success: true, message: "Password updated successfully" });
      }
      else {
        res
          .status(401)
          .json({ success: false, message: "something went wrong!" });
      }
    }
    else {
      res
        .status(401)
        .json({ success: false, message: "Student does not exists!" });
    }
  }
  catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { createStudent, signInStudent, forgotPasswordStudent, updatePassStudent };