const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.send('docker boladao')
})

app.listen(3000)