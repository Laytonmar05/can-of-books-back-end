'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const Book = require('./model/books');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

app.get('/test', (request, response) => {
  response.send('test request received')
})

app.get('/books',getBooks);

async function getBooks(request, response) {
  try{
      const books = await Book.find({}); 
      response.status(200).send(books);
  } catch (error) {
    console.error(error);
    response.status(500).send(`An Error Occured in the Server... ${error.message}`);
  };
};
app.listen(PORT, () => console.log(`listening on ${PORT}`));
