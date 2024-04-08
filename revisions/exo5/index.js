const nombreUn = document.getElementById("nombreUn")

const nombreDeux = document.getElementById("nombreDeux")

const nombreTrois = document.getElementById("nombreTrois")

const button = document.getElementById("button")

button.addEventListener("click", (event) => {
    if (nombreUn.value > nombreDeux.value && nombreUn.value > nombreTrois.value){
        console.log(`${nombreUn.value} est plus grand`)
    } else if (nombreDeux.value > nombreUn.value && nombreDeux.value > nombreTrois.value){
        console.log(`${nombreDeux.value} est plus grand`)
    } else {
        console.log(`${nombreTrois.value} est plus grand`)
    }
})