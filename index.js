//1. How do you create a simple Express.js application?
const express = require("express");
const app = express();
app.get("/", (req,res) =>{
    res.send("Hlo world.")
})
app.get("/exp", (req,res) =>{
    res.send("Hi am Express.js")
})
app.listen(5000, ()=>{
    console.log("Server is running");
})

//2 Implementation of all type of exports in backend application
const data = require("./obj")

app.get("/obj", (req,res) =>{
    res.send(data);
})

//3 Create a middleware which will be applicable to all the routes.
const middleware = (req, res, next) => {
    console.log("Middleware is Working");
    next();
  };
  app.use(middleware);

//4 Implement CORS.
    const cors = require("cors")
    app.use(cors()); 
    app.get("/cors", (req, res) => {
    res.send("Cors is working");
});
