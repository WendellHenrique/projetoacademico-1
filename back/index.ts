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

//Validacoes login
var validacaoLogin: string


app.post('/login',( req, res) => {

    console.log('chegou no servidor')
    console.log(req.body)
    let requicicaoLogin = req.body

    const professorTem = requicicaoLogin.login.match(/^00/g)
    const administradorTem = requicicaoLogin.login.match(/^11/g)

    if(professorTem == '00'){        
        validacaoLogin = 'professor'
    }

    if(administradorTem == '11'){
        validacaoLogin = 'administrador'
    }

    if(administradorTem != '11' && professorTem != '00'){
        validacaoLogin = 'aluno'
    }

})

app.get('/login', (req,res) => {
    res.send({validarLogin: validacaoLogin})
})



app.listen(3000, function(){
    console.log('servidor iniciado')
})

