const numberOne = document.getElementById("numberOne")
const numberTwo = document.getElementById("numberTwo")

let result = (numberOne.value) * (numberTwo.value)

let button = document.getElementById("button")

//console.log(result)

//if (result > 0) {
  //  console.log(`${result} est positif`)
//} else if (result === 0 ) {
  //  console.log(`${result} est nul`)
//} else {
  //  console.log(`${result} est négatif`)
//}

button.addEventListener("click", (event) => {
   console.log("coucou")
} )


console.log(button)

//Toujours un souci au niveau du bouton. Le code au dessus fonctionne. Le console.log("coucou") ne marche pas, mais le console.log(button) le prend bien.