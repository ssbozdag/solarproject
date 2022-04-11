import express, { urlencoded } from 'express'
import cors from "cors"
import { config } from 'dotenv';
config();

const app = express()
const port = process.env.PORT || 3000;

import session from 'express-session';
let sessionOptions = {
  secret: "12345",
  cookie: {
    maxAge: /*20000*/30 * 60 * 1000 /*269999999999*/
  },
  saveUninitialized: true,
  resave:false
};


app.use(session(sessionOptions));

app.use(cors())
app.use(urlencoded({ extended: true })); // to support URL-encoded bodies

// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


import DataRouter from './routers/DataRouter.js';
app.use("/api/data" , DataRouter);

import LoginRouter from './routers/LoginRouter.js';
app.use("/api/login" , LoginRouter);

import ViewRouter from './routers/ViewRouter.js';
app.use("/view" , ViewRouter);