import express from 'express'
import * as path from 'path';

const __dirname = path.resolve(path.dirname(''));

const router = express.Router();

import LoginService from '../services/LoginService.js';
const service = new LoginService();

router.post('/a', async (req, res) => {
    let a = await service.authenticate(req.body.username, req.body.password);
    if (a){
        req.session.loggedin = true;
        res.redirect("/view/data")
    }
    else {
        req.session.loggedin = false;
        res.redirect("/view/faillogin?failed=true");
    }
});

export default router;
