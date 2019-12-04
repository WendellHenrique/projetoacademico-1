var express = require('express');
var router = express.Router();
var model = require('../models/index');

//Validacoes login
var validacaoLoginTipo = ''
var validacaoLogin = false


router.post('/login', function (req, res) {
    
    var requicicaoLogin = req.body
        
    let professorTem = requicicaoLogin.matricula.match(/^00/)
    let administradorTem = requicicaoLogin.matricula.match(/^11/)

    if(professorTem != null){        
        this.validacaoLoginTipo = 'professor'
        
    }

    if(administradorTem != null){
        this.validacaoLoginTipo = 'administrador'
    }

    if(administradorTem == null && professorTem == null){
        this.validacaoLoginTipo = 'aluno'
    }
    // console.log(this.validacaoLogin)
  });

router.get('/login', (req, res) => {
    console.log(validacaoLogin)
    console.log(this.validacaoLogin)
    res.send([{ validarLogin : this.validacaoLogin}])
})

module.exports = router