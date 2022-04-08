import executequery from "../db/QueryExecutor.js";

export default class DataService{
    constructor(){


    }

    async getAllData(){
        return await executequery('SELECT * FROM datas ORDER BY date DESC')
    }

    async getDataDueDate(startDate, endDate){
        console.log(`SELECT * FROM datas where date >='${startDate.replace("T", " ")}' and date <= ' ${endDate.replace("T", " ")}' ORDER BY date DESC `);
        return await executequery(`SELECT * FROM datas where date >='${startDate.replace("T", " ")}' and date <= ' ${endDate.replace("T", " ")}' ORDER BY date DESC `)
    }

    async addData(voltage, amper, watt){
        return await executequery(`INSERT into datas(voltage,amper, watt) VALUES (${voltage}, ${amper} , ${watt})`);
    }
}