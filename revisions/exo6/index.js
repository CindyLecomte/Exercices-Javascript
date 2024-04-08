const note = document.getElementById("input")

const button = document.getElementById("button")

button.addEventListener("click", (event) => {
    if (note.value >= 10) {
        console.log("validé")
    } else {
        console.log("non validé")
    }
})