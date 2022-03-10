express = require("express")

const app = express()


app.get("/",(req,res)=>{
    res.send("<h1> welcome to node app<h1>")
})

app.get("/about",(req,res)=>{
    res.send("<h1> welcome to about section<h1>")
})

app.listen(3000)