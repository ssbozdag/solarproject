import express from 'express'

const router = express.Router();

import DataService from '../services/DataService.js';
const service = new DataService();

router.get('/get', async(req, res, next) => {
    let data = await service.getAllData();
    res.send(data);
})

router.get('/get2', async(req, res) => {
    console.log(req);
    let data = await service.getDataDueDate(req.query.startdate, req.query.enddate);
    res.send(data);
})

router.post("/add", async(req, res) => {
    let a = service.addData(req.body.voltage, req.body.amper, req.body.watt);
    res.send(a);
});

export default router;
