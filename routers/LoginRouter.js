import express from 'express'
import * as path from 'path';
import Hasher from '../core/Hasher.js';

const __dirname = path.resolve(path.dirname(''));

const router = express.Router();

import LoginService from '../services/LoginService.js';
const service = new LoginService();

const host = process.env.HOST + process.env.PORT

router.post('/', async (req, res) => {

    let userExists = await service.authenticate(req.body.username, req.body.password);

    console.log(userExists);


    if (userExists) {
        req.session.loggedin = true;
        res.send({ message: "Success!", redirect: `/view/data`});
    }
    else res.send({ message : "Fail"});
});

router.post('/new', async (req, res) => {
    let usernameFound = await service.search(req.body.username);
    console.log("50: new method");
    if (usernameFound) res.send({ message: "AlreadyExists!" });
    else if (!usernameFound) {
        await service.saveUser(req.body.username, Hasher.hashBySHA512(req.body.password));
        res.send({ message: "Registered" });
    }
})
export default router;
