const mongoose = require('mongoose');
require('dotenv').config()  //dotenv is a tool for storing secure data
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const server = express();
const path = require('path');
const bodyParser = require('body-parser');



server.use(cors());
server.use(bodyParser.json());
server.use(express.json());
server.use(morgan('combined'));
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/to-do');
  console.log('database connected');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const TodoItemRoute = require('./routes/todoitems');
server.use('/', TodoItemRoute);

server.listen(8000, () => {
	console.log('Server started ')
})