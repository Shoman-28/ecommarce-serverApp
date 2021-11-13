const express= require('express');
const mongoose = require('mongoose');
const todoHandler = require('./routeHandler/todoHandler');



// express app intializtion
const app = express();
app.use(express.json());

//database connection with mongoose
// .connect('mongodb://localhost/todos', {useNewUrlParser: true, useUnifiedTopology: true})

app.get("/", (req, res) => {
    res.send("Hello World!");
  });

mongoose
.connect('mongodb://localhost/todos', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> console.log('connaction successfully'))
.catch((err)=>console.log(err))

// application routes
app.use('/todo', todoHandler);


//default error handler
function errorHandler(err, req, res, nex){
    if(res.headersSent){
        return nex(err);
    }
    res.status(500).json({error:err});
}

app.listen(3000, ()=>{
    console.log("app listening at port 3000")
})