import executequery from "../db/QueryExecutor.js";

export default class DataService{
    constructor(){


    }

    async authenticate(username, password){
        let data = await executequery(`SELECT count(*) FROM admins WHERE username = '${username}' and password = '${password}'`);
        return data.data[0]['count(*)'] == 1 ? true : false; 
    }

}