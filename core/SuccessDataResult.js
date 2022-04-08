import DataResult from "./DataResult.js";
export default class SuccessDataResult extends DataResult{
    constructor(message, data){
        super(true, message);
        this.data = data;
    }
}