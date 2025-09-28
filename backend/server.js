const path = require('path'); // Import path module first
require('dotenv').config({ path: path.join(__dirname, '.env') });
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Debug environment variables
console.log('GMAIL_USER:', process.env.GMAIL_USER);
console.log('GMAIL_PASS:', process.env.GMAIL_PASS);

// Get CORS origin from environment variable, fallback to localhost for development

const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173';
console.log('CORS Origin:', FRONTEND_URL);

app.use(cors({
  origin: FRONTEND_URL, 
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));

app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // Use TLS
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

app.post('/api/send-email', (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).send('All fields are required');
  }

  const mailOptions = {
    from: email,
    to: 'mshariq824@gmail.com',
    subject: subject || 'Update from Gazi Aeromatics',
    text: `You have a new enquiry from:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.send('Thank you! Your enquiry has been sent.');
    }
  });
});

// Add a simple route so the Render URL doesn't return a 404/error on the root path
app.get('/', (req, res) => {
  res.status(200).send('Gazi Aeromatics API is running successfully!');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));