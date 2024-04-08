const nombreUn = document.getElementById("nombreUn")

const nombreDeux = document.getElementById("nombreDeux")

const button = document.getElementById("button")


const result = (nombreUn.value) * (nombreDeux.value)

button.addEventListener("click", (event) => {
    console.log(result)
})