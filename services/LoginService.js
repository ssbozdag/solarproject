import executequery from "../db/QueryExecutor.js";
import Hasher from "../core/Hasher.js";

export default class DataService{
    constructor(){


    }

    async authenticate(username, password){
        let data = await executequery(`SELECT count(*) FROM admins WHERE username = '${username}' and password = '${Hasher.hashBySHA512(password)}'`);
        return data.data[0]['count(*)'] == 1 ? true : false; 
    }

    async saveUser(username, password){
        let a = await executequery(`INSERT INTO admins (username, password) VALUES ('${username}', '${password}')`);
        return undefined;
    }

}