import express from 'express'
import * as path from 'path';

const __dirname = path.resolve(path.dirname(''));

const router = express.Router();

router.get("/login",async(req, res) => {
   res.render(__dirname + "/views/login.ejs");
}); 

router.get("/faillogin",async(req, res) => {
   console.log(req.query);
   if(req.query.failed == true)
      res.render(__dirname + "/views/faillogin.ejs");
   else 
      res.render(__dirname + "/views/login.ejs")
}); 

router.get('/data', async(req, res) => {
   if(req.session.loggedin)
      res.render(__dirname + "/views/data2.ejs");
   else
      res.render(__dirname + "/views/login.ejs");
});

export default router;
