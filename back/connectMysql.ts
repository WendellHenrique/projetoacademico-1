import * as mysql from 'mysql';
import { Disciplina } from './classes/Disciplina';
class Mysql{

    connection: mysql.Connection

    constructor(){

        
        this.connection =  mysql.createConnection({
            host : 'localhost',
            user : 'root',
            password : '',
            database: 'controleacademico'
        })

        this.connection.connect((err) =>{
            if (err) throw err
            console.log('connect')
        })
    }

    //funcoes(metodos) para comunicacao com o banco
    public addAluno(disciplina : Disciplina): void{
        this.connection.query('INSERT INTO disciplina SET ?',disciplina)
    }


} export { Mysql }

