import express, { urlencoded } from 'express'
import cors from "cors"

const app = express()
const port = 3000

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

import ViewRouter from './routers/ViewRouter.js';
app.use("/view" , ViewRouter);