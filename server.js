'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const Book = require('./models/books');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_CONNECTION);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', _ => {
  console.log('We are connected to Mongo Atlas!');
});

app.get('/test', (request, response) => {
  response.send('test request received')
})
app.get('/books', getBooks);

async function getBooks(request, response) {
  try {
    console.log('hitting the sever');
    const books = await Book.find({});
    response.status(200).send(books);
  } catch (error) {
    console.error(error);
    response.status(500).send(`My bad! an error occurred in the server! Someone call the developer...${error.message}`);
  };
};

app.listen(PORT, () => console.log(`listening on ${PORT}`));