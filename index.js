const express = require('express');
const app = express()

app.get("/",(req,res)=>{
    res.send({message:"working fine.......!"});
})

module.exports = app