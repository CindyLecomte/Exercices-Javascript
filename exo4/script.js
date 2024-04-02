let inputNumber = document.getElementById("number")

let button = document.getElementById("button")

button.addEventListener("click", (event ) => {
    if (inputNumber.value%2 ==0){
        console.log(`${inputNumber.value} est pair`)
    } else {
        console.log(`${inputNumber.value} est impair`)
    }



})