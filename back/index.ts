var express = require('express')
import { Mysql } from './connectMysql'

var app = express()

app.get('/', function( req, res) {
    res.send('hello wourld')
})

app.listen(3000, function(){
    console.log('servidor iniciado')
})

