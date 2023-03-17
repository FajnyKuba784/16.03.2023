const express = require('express')
const cors = require('cors')

const app = express()
const port = 3001

app.use(cors())


const users = [
    {user: "admin",pass: "admin",upr: "admin"},
    {user: "user",pass: "user",upr: "user"},
    {user: "Jan",pass: "Kowalski",upr: "user"}


]


app.get("/get/:user/:pass", (req,res)=>{
    const user = req.params.user
    const pass = req.params.pass
    
    for(let i=0;i<=users.length-1;i++){

        if(users[i].user == user && users[i].pass == pass){

            res.json({user: users[i].user, upr: users[i].upr})
        }
        
        
    }
    
    
        res.json({status: "brak usera"})
    
    
})




    
app.get("/",function(req,res){

res.send(admin)   


})
    
    
    
    
    




app.listen(3001, ()=>(
    console.log(`Aplikacja działa na porcie: ${port}`)
))