const numberOne = document.getElementById("numberOne")

const numberTwo = document.getElementById("numberTwo")

const numberThree = document.getElementById("numberThree")

const button = document.getElementById("button")



button.addEventListener("click", (event) => {
  if (numberOne.value > numberTwo.value && numberOne.value > numberThree.value) {
    console.log(numberOne.value)
    } else if (numberTwo.value > numberOne.value && numberTwo.value > numberThree.value) {
    console.log(numberTwo.value)
   } else {
    console.log(numberThree.value)
}}) 