const numberOne = document.getElementById("numberOne")
const numberTwo = document.getElementById("numberTwo")

let result = (numberOne.value) * (numberTwo.value)

let button = document.getElementById("button")




button.addEventListener("click", (event) => {
    if (result > 0) {
        console.log(`${result} est positif`)
      } else if (result === 0 ) {
          console.log(`${result} est nul`)
      } else {
        console.log(`${result} est négatif`)
      }
} )



