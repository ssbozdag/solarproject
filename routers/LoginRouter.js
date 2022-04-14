import express from 'express'
import * as path from 'path';
import Hasher from '../core/Hasher.js';

const __dirname = path.resolve(path.dirname(''));

const router = express.Router();

import LoginService from '../services/LoginService.js';
const service = new LoginService();

router.post('/', async (req, res) => {
    //let userExists = await service.authenticate(req.body.username, req.body.password);

    //console.log(userExists);
    console.log(req.body);

    if (req.body.username == "a") {
        req.session.loggedin = true;
        // return res.redirect("/view/data")
        res.send({message: "Success!"});
    }

    /*if (userExists && req.body.login != undefined){
        req.session.loggedin = true;
        return res.redirect("/view/data")
    }
    else if(userExists && req.body.signup != undefined){
        req.session.loggedin = false;
        res.send("alreadyExists");
        //res.redirect("/view/login?alreadyexists=true");
    }
    else if(!userExists && req.body.signup != undefined){
        req.session.loggedin = false;
        await service.saveUser(req.body.username, Hasher.hashBySHA512(req.body.password));
        res.send("registered");
        //res.redirect("/view/login?registration=true");
    } else {
        res.send("fail");
        //res.redirect("/view/login?failed=true");
    }*/
});

export default router;
