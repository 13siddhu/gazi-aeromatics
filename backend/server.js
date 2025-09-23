require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path'); // Added for serving static files

const app = express();
app.use(cors()); // Enable CORS for React frontend
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

app.post('/api/send-email', (req, res) => {
  const { name, email, subject, message } = req.body;

  // Basic validation
  if (!name || !email || !subject || !message) {
    return res.status(400).send('All fields are required');
  }

  const mailOptions = {
    from: email,
    to: 'singhsiddhartha220@gmail.com',
    subject: subject || 'Request from siddhu',
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

// Serve static files from the frontend build directory
app.use(express.static(path.join(__dirname, '..', 'frontend', 'dist')));

// The "catchall" handler: for any request that doesn't match an API route, send back the frontend's index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'dist', 'index.html'));
});

// Use the PORT provided by the hosting environment, or 3001 if not available
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));