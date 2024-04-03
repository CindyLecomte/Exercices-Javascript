let note = document.getElementById("note")
let button = document.getElementById("button")



button.addEventListener("click", (event) => {
    if(note.value >=10) {
        console.log("Validé")
    } else {
        console.log("Non validé")
    }
})
