import executequery from "../db/QueryExecutor.js";

export default class DataService{
    constructor(){


    }

    async getDataCount(startDate, endDate){
        console.log(`SELECT COUNT(date) FROM datas WHERE date >= '${startDate.replace("T", " ")}' and date <= '${endDate.replace("T", " ")}'`);
        return await executequery(`SELECT COUNT(date) as count FROM datas WHERE date >= '${startDate.replace("T", " ")}' and date <= '${endDate.replace("T", " ")}'`)
    }

    /*async getDataDueDate(startDate, endDate, page){
        // console.log(`SELECT * FROM datas where date >='${startDate.replace("T", " ")}' and date <= ' ${endDate.replace("T", " ")}' OFFSET ${(page-1)*10} ORDER BY date DESC `);
        return await executequery(`SELECT * FROM datas where date >='${startDate.replace("T", " ")}' and date <= ' ${endDate.replace("T", " ")}' OFFSET ${(page-1)*10} ORDER BY date DESC `)
    }*/

    async getData(startDate, endDate, page, sortBy="date", sortType="desc"){
        console.log(`SELECT * FROM datas where date >='${startDate.replace("T", " ")}' and date <= ' ${endDate.replace("T", " ")}'  ORDER BY ${sortBy} ${sortType} LIMIT 10 OFFSET ${(page-1)*10} `);
        return await executequery(`SELECT * FROM datas where date >='${startDate.replace("T", " ")}' and date <= ' ${endDate.replace("T", " ")}'  ORDER BY ${sortBy} ${sortType} LIMIT 10 OFFSET ${(page-1)*10} `)
    }


    async addData(voltage, amper, watt){
        return await executequery(`INSERT into datas(voltage,amper, watt) VALUES (${voltage}, ${amper} , ${watt})`);
    }
}