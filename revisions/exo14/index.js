const tableau = [
    1,2,3,4,5
]

let accu = 0    //On déclare le compter à 0

for (let elt of tableau){   //Pour chaque élément du tableau
    accu = accu + elt   //On redéclare accu en disant qu'on veut l'ancienne version d'accu + l'élément de notre tableau
                        // Donc: 
                        // accu = 0 +1 = 1
                        // accu = 1+2 = 3
                        // etc ...
}

console.log(accu)   //on peut console.log accu puisqu'on l'a déclaré avant la boucle

moyenne = accu / tableau.length
console.log(moyenne)