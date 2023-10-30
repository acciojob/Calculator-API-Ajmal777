// Add the Calculator APIs

const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname))
app.use(express.json())

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/main.html'));
});

//your code here
app.post('/add/:num1/:num2', (req, res) => {
  const num1 = Number(req.params.num1);
  const num2 = Number(req.params.num2);

  try {
    validate(num1, num2);

    res.send({
      status: "success" | "failure" | "error",
      message: "the sum of given two numbers",
      sum: num1 + num2
    })
  }
  catch (err) {
    return res.send({
      status: "error",
      message: err.message,
    })
  }
})

app.post('/sub/:num1/:num2', (req, res) => {
  const num1 = Number(req.params.num1);
  const num2 = Number(req.params.num2);

  try {
    validate(num1, num2);

    res.send({
      status: "success" | "failure" | "error",
      message: "the difference of given two numbers",
      sum: num1 - num2
    })
  }
  catch (err) {
    return res.send({
      status: "error",
      message: err.message,
    })
  }
})

app.post('/multiply/:num1/:num2', (req, res) => {
  const num1 = Number(req.params.num1);
  const num2 = Number(req.params.num2);

  try {
    validate(num1, num2);

    res.send({
      status: "success" | "failure" | "error",
      message: "The product of given numbers",
      sum: num1 * num2
    })
  }
  catch (err) {
    return res.send({
      status: "error",
      message: err.message,
    })
  }
})

app.post('/divide/:num1/:num2', (req, res) => {
  const num1 = Number(req.params.num1);
  const num2 = Number(req.params.num2);

  try {
    validate(num1, num2);

    if (num2 === 0) {
      return res.send({
        status: "error",
        message: "Cannot divide by zero"
      })
    }

    res.send({
      status: "success" | "failure" | "error",
      message: "The division of given numbers",
      sum: num1 / num2
    })
  }
  catch (err) {
    return res.send({
      status: "error",
      message: err.message,
    })
  }


})

function validate(num1, num2) {
  if (!num1 || !num2) throw new Error('Invalid data type');
  if (num1 > 1000000 || num2 > 1000000) throw new Error('Overflow');
  else if (num1 < -1000000 || num2 < -1000000) throw new Error('Underflow');
}

module.exports = app;
