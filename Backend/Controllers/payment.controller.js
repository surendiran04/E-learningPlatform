const { db } = require('../Database/DBconfig')


const d = new Date();
const currentDate = d.toLocaleDateString();
const dateString = currentDate;
const parts = dateString.split('/');
const isoDate = `${parts[2]}-${parts[1].padStart(2, '0')}-${parts[0].padStart(2, '0')}`;

const makePayment = async (req, res) => {
    try {
        const data = req.body
        data.date = isoDate;
      if (data) {
        db.query("INSERT INTO PAYMENT(course_id,student_id ,amount,payment_date) VALUES ($1, $2, $3,$4)",[data.course_id,data.student_id,data.amount,data.date])
        .then(() => {
          return res.status(201).json({ success: true, message: "Payment successfully!" });
        })
        .catch((error) => {
          return res.status(401).json({ success: false, message: error.message });
        })
      } else {
        return res.status(404).json({ success: false, message: "Payment failed" });
      }
    }catch (error) {
      return res.status(500).json({ success: false, message: error.message, });
    }
  }

  module.exports = {makePayment };
 