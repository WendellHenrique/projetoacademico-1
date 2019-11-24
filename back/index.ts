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



app.post('/login',( req, res, next) => {

    console.log('chegou no servidor')
    console.log(req.body)
    let requicicaoLogin = req.body
    let professorValidacao = false
    let administradorValidacao = false

    const professorTem = requicicaoLogin.login.match(/^0{1}/)
    const administradorTem = requicicaoLogin.login.match(/^0{2}/)    

    if(professorTem){        
        app.get('/login',(req, res) => {
            res.send({validacao: 'professor'})
    })
    }

    if(administradorTem){
        app.get('/login',(req, res) => {
            res.send({validacao: 'administrador'})
        })
    }
    
    if(!administradorTem || !professorTem){
        app.get('/login',(req, res) => {
           res.send({Validacao: 'aluno'}) 
    })
    }   
})

app.listen(3000, function(){
    console.log('servidor iniciado')
})

