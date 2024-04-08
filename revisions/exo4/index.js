const input = document.getElementById("number")

const button = document.getElementById("button")

button.addEventListener("click", (event) => {
    if (input.value %2 == 0){
        console.log("le nombre est pair")
    } else {
        console.log("le nombre est impair")
    }
})