const express = require('express');
const graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');
//const schema = require('./GraphQL/Schema)
// const root = require('./GraphQL/RootSchema)
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// allow cross-origin requests
app.use(cors());

// connect to mlab database
// make sure to replace my db string & creds with your own


mongoose.connect('mongodb://localhost;27017/service_rdv', {useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err)
       console.error(err);
    else
       console.log("Connected to the mongodb"); 
  });

// bind express with graphql
// app.use('/graphql', graphqlHTTP({
//     schema,
//     graphiql: true
// }));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});

