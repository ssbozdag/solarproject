import DataResult from "./DataResult.js";
export default class ErrorDataResult extends DataResult{
    constructor(message, err){
        super(false, message);
        this.err = err
    }
}

