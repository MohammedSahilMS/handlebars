const express = require("express")
const path = require("path")

const app = express()

app.use((req,res,next) => {
    console.log("middleware")
    next()
})

app.get("/signup", (req,res) => {
    res.sendFile(path.join(__dirname,"index.html"))
})

app.get("/about" , (req,res) => {
    res.send("about")
})

app.post("/signup", (req,res) => {
    res.send("Account Created")
})


 


app.listen(3000,() =>{
    console.log("Server has started")
})