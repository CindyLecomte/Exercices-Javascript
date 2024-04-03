let note = document.getElementById("note")
let button = document.getElementById("button")

//if(note.value >=10) {
 //   console.log("Validé")
//} else {
 //   console.log("Non validé")
//}

button.addEventListener("click", (event) => {
    console.log("coucou")   // ???
    if(note.value >=10) {
        console.log("Validé")
    } else {
        console.log("Non validé")
    }
})
// Sans le console.log("coucou"), rien ne s'affiche en console.
// Avec le console.log, le "coucou" ne s'affiche pas mais affiche ma condition en console selon le nombre saisi.