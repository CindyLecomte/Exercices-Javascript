let nombreUn = document.getElementById("numberOne")

let nombreDeux = document.getElementById("numberTwo")


let button = document.getElementById("button")


button.addEventListener("click", (event) => {   
    console.log(nombreUn.value * nombreDeux.value)
})

//Marche pas