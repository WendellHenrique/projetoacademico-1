var express = require('express')
import { Mysql } from './connectMysql'
import * as path from 'path'

var app = express()

app.use(express.json())


app.post('/login', function( req, res) {

    console.log('chegou no servidor')
    console.log(req.body)
    
})

app.listen(3000, function(){
    console.log('servidor iniciado')
})

