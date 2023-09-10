const express = require('express');
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 4000


const detailRoute = require('./route/route');
app.use('/api', detailRoute);



app.listen(PORT, ()=>{
    console.log("Server Started")
   
})

