import express from 'express'
import * as path from 'path';

const __dirname = path.resolve(path.dirname(''));

const router = express.Router();


router.get('/data', async(req, res) => {
   res.render(__dirname + "/views/data.ejs");
});

export default router;
