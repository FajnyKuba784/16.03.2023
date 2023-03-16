const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

var admin = [{
    login:"I hate",
    haslo:"Niggers"
}]
    app.get("/login",function(req,res){

    const login = document.getElementById("login").value
    const halso = document.getElementById("password").value 


    if(login==user&&halso==adminpass){
        localStorage.setItem('login',"admin")
        res.send("Zalogowano")
        window.location.href="admin.html"
    }
        
    else{
        res.send("niezawogowano")
        alert("Błędny login lub hasło")
        localStorage.setItem('login',"false")
        
    } 
})






    
app.get("/",function(req,res){

res.send(admin)   


})
    
    
    
    
    




app.listen(3000)