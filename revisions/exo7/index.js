const nombreUn = document.getElementById("nombreUn")

const nombreDeux = document.getElementById("nombreDeux")

const button = document.getElementById("button")

const result = (nombreUn.value) * (nombreDeux.value)

button.addEventListener("click", (event) => {
    if (result > 0){
        console.log(`${result} est positif`)
    } else if (result < 0){
        console.log(`${result} est négatif`)
    } else {
        console.log(`${result} est nul`)
    }
})