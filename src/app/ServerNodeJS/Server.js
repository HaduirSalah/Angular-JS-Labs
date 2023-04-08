const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// configure middleware
app.use(bodyParser.json());
app.use(cors());

// initialize an empty array to hold registered users
let users = [];

// API to register a new user
app.post('/Register', (req, res) => {
  const { userName, password, email } = req.body;

  // check if user with the same username already exists
  const existingUser = users.find(user => user.userName === userName);
  if (existingUser) {
    res.status(409).json({ message: 'User already exists' });
    return;
  }

  // create a new user object and add it to the array
  const newUser = { userName, password, email };
  users.push(newUser);

  // return a success message
  res.status(201).json({ message: 'User registered successfully' });
});

// API to login a user
app.post('/Login', (req, res) => {
  const { email, password } = req.body;

  // retrieve the users array from local storage
  const users = JSON.parse(localStorage.getItem('users')) || [];

  // find the user with the given username
  const user = users.find(user => user.email === email);

  // if user not found or password is incorrect, return an error response
  if (!user || user.password !== password) {
    res.status(401).json({ message: 'Invalid credentials' });
  } else {
    // otherwise, return a success message with the username
    res.status(200).json({ message: `Welcome, ${user.userName}` });
  }
});

// start the server on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


