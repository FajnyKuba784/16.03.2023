async function getUser(){
    const login = document.getElementById("login").value
    const passw = document.getElementById("password").value


    const data = await fetch(`http://localhost:3001/get/${login}/${passw}`)
    const json = await data.json()
    console.log(json)


    if(json.user != undefined){
        localStorage.setItem("upr", JSON.stringify(json))


    }
    else {
        localStorage.setItem("upr", "false")

    }


}


function checkUser(){

    const user = JSON.parse(localStorage.getItem("upr"))

    const url = window.location.href

    if(user.upr != "admin"&& url.includes("admin.html")){
        window.location.href = "login.html"
    }


}

function sprawdz(){

    const user = JSON.parse(localStorage.getItem("upr"))

    const url = window.location.href

    if(user.upr != "admin" && url.includes("user.html") && user.upr !="user" ){

        window.location.href = "login.html"
    }


}