import crypto from 'crypto';
export default class Hasher{

    constructor (){
        
    }

    static hashBySHA512(string){
        return crypto.createHash('sha512').update(string, "utf-8").digest("hex");
    }
}