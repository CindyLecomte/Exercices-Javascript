const noteUne = document.getElementById("rateOne")
const noteDeux = document.getElementById("rateTwo")
const noteTrois = document.getElementById("rateThree")

const noteUneEntier = parseInt(noteUne.value)
const noteDeuxEntier = parseInt(noteDeux.value)
const noteTroisEntier = parseInt(noteTrois.value)

const result = (noteUneEntier + noteDeuxEntier + noteTroisEntier) / 3

let button = document.getElementById("button")

button.addEventListener("click", (event) => {
    console.log(result)
})






