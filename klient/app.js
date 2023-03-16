

async function sprawdz(){

    const data = await fetch("http://localhost:3000/login")
    const json = data.json()

    


}

function check(){

    const admin = localStorage.getItem("login")
    const div = document.getElementById("menu")
    const button = document.createElement("button")

 
        if(admin!="admin") window.location.href = "login.html"
        

    

    if(admin=="admin"){

        button.innerHTML = "Wyloguj"
        button.setAttribute("onclick","przycisk()")
        div.appendChild(button)



    }
}

function przycisk(){

    localStorage.removeItem("login")


}