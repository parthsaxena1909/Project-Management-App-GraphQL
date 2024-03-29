const express = require('express');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const schema = require('../schema/schema');
const cors = require('cors');
const port = process.env.PORT || 4000;
const app = express();
const colors = require('colors');
const connectDB = require('./config/db.js');



//connect to DB

connectDB();

app.use(cors());

app.use(
    '/graphql',
    graphqlHTTP({
        schema,
        graphiql: process.env.NODE_ENV === 'development',
    })
);

app.listen(port, console.log(`Server running on port ${port}`));