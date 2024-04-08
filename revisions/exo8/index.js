const noteUne = document.getElementById("noteUne")
const noteDeux = document.getElementById("noteDeux")
const noteTrois = document.getElementById("noteTrois")
const button = document.getElementById("button")

const noteUneEntier = parseInt(noteUne.value)
const noteDeuxEntier = parseInt(noteDeux.value)
const noteTroisEntier = parseInt(noteTrois.value)


let moyenne = (noteUneEntier + noteDeuxEntier + noteTroisEntier) /3

button.addEventListener("click", (event) => {
    console.log(moyenne)
})

