import DBConnection from './DBConnection.js'
import SuccessDataResult from '../core/SuccessDataResult.js'
import ErrorDataResult from '../core/ErrorDataResult.js'
let executequery = function (query){
    const promise = new Promise( (resolve, reject) => {
        DBConnection.query(query, (err, rows, fields) => {
            if (err) reject(err)
            resolve(rows);

        })
    } );

    return promise.then(data => {
        return new SuccessDataResult("Process Don!", data)
        //return data
    }).catch(err => {
        return new ErrorDataResult("An unknown error occured", err.sqlMessage.toString().replace(":", "").replace("\"", ).replace("`", ""));
    });


}

export default executequery;