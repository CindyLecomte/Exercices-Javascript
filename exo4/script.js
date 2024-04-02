let inputNumber = document.getElementById("number")

let button = document.getElementById("button")

if (inputNumber%2 ==0) {

    button.addEventListener("click", (event) => {
        console.log(`${inputNumber.value} est pair`)
    })
} else {
    button.addEventListener("click", (event) => {
        console.log(`${inputNumber.value} est impair`)
    })
}




