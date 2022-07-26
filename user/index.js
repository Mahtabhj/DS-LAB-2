const express = require('express');

const app = express();

app.use(express.json());

app.use('/',(req,res,next) => {

    return res.status(200).json({"msg":"Hello from user"})

})

app.listen(8003,()=>{

    console.log("status is listening port 8003")
})