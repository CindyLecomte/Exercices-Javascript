function repeteBonjour(nombreDeFoisQueJeRepete){
    let counter = 0;
    while(counter < nombreDeFoisQueJeRepete) {
        counter= counter +1
        console.log("Bonjour", counter)
    }
}

console.log(repeteBonjour(3))