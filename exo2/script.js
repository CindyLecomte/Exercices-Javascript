let inputName = document.getElementById("name")


let inputFirstname = document.getElementById("firstname")

let button = document.querySelector("button")

button.addEventListener("click", (event) => {   
    console.log(inputName.value + inputFirstname.value) 
})