import express from 'express'

const router = express.Router();

import DataService from '../services/DataService.js';
const service = new DataService();

router.get('/count', async(req, res, next) => {
    let data = await service.getDataCount(req.query.startdate, req.query.enddate);
    res.send(data);
})

router.get('/get', async(req, res) => {
    let data = await service.getData(req.query.startdate, req.query.enddate, req.query.page, req.query.sortby, req.query.sorttype);;
    res.send(data);
})

router.post("/add", async(req, res) => {
    let a = service.addData(req.body.voltage, req.body.amper, req.body.watt);
    res.send(a);
});

export default router;
