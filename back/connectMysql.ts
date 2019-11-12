var mysql = require('mysql')

class Mysql{

    constructor(){

        
        let connection =  mysql.createConnection({
            host : 'localhost',
            user : 'root',
            password : '0000'
        })
    }

    //funcoes(metodos) para comunicacao com o banco
    

} export { Mysql }

