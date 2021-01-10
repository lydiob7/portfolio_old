const express = require('express');
const router  = express.Router();
const { contactEmail } = require('../config/nodemailer')

/* GET home page */
router.get('/', (req, res, next) => {
  res.status(200).send('index.html');
});

/* Contact form */

router.post('/contact', async (req, res) => {
  try {
    const { email, subject, message } = req.body
    await contactEmail(email, subject, message)
    res.status(200).json({'message': 'Email sent'})
  } catch(err) {
    res.status(500).json(err)
  }
});

module.exports = router;
