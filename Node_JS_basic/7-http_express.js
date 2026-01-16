const express = require('express');
const countStudents = require('./3-read_file_async');

const database = process.argv[2];
const port = 1245;
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello Holberton School!');
});
app.get('/students', async (req, res) => {
  res.status(200);
  try {
    const students = await countStudents(database);
    res.send(`This is the list of our students\n${students}`);
  } catch (error) {
    res.send(error.message);
  }
});
app.listen(port);
module.exports = app;
