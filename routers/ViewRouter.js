import express from 'express'
import * as path from 'path';

const __dirname = path.resolve(path.dirname(''));

const router = express.Router();

router.get("/login", async (req, res) => {
   if (req.session.loggedin && req.session.loggedin == true) {
      res.redirect("/view/data")
   }
   res.render(__dirname + "/views/login.ejs", { failed: false });
});


router.get('/data', async (req, res) => {
   if (req.session.loggedin) {
      res.render(__dirname + "/views/data2.ejs", {host: process.env.HOST + process.env.PORT} );
   }
   else
      res.sendStatus(401).end();
});

export default router;
