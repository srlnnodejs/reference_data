const express = require('express');
const bodyParser = require('body-parser');
require("./db/db")
const path = require('path');
const cors = require('cors');
const user = require('./routes/user.route');
require('dotenv').config()
const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use("/user",user)

app.listen(1111)