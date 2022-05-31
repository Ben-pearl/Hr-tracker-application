const dbconn = require('./models/candidate');
const express = require('express');
const app = express();

const getcandidate = dbconn.query('SELECT * FROM candidate_tables', function(err, results) {
    
})