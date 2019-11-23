import * as express from 'express';
import { Mysql } from './connectMysql'
import * as cors from 'cors';

var app = express()
var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSucessStatus: 200
}

var mysql = new Mysql()

app.use(cors(corsOptions))
app.use(express.json())


app.route('/login/').post(( req, res) => {

    console.log('chegou no servidor')
    console.log(req.body)
    
})

app.listen(3000, function(){
    console.log('servidor iniciado')
})

