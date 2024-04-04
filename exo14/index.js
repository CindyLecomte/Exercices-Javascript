const tableauNotes = [
    15, 20, 8, 14, 6, 12, 0
]

// Méthode 1 : forEach : execute une fonction sur chaque élément du tableau

//function moyenne(tableauNotes) {    //On crée une fonction moyenne, qui prend en paramètre le tableau.
  //  let somme = 0;  //On initialise une somme à 0


//tableauNotes.forEach(function (note) {   // On utilise la fonction forEach sur le tableau et on met en paramètre chaque note du tableau
  //  somme += note     //On additionne la somme à chaque note. Grâce à forEach, cela va se répéter pour chaque note.
//});                    // 0 + 15 = 15,
                        //15+20 = 35
                        //etc...


//return somme / tableauNotes.length  //On retourne le calcul : la somme totale des additions faites au dessus, divisé par la taille du tableau.

//}

//console.log(moyenne(tableauNotes))  //On affiche en console notre fonction





//Méthode 2 : fonction reduce()

function calcul(a,b) {  //On crée une fonction calcul qui prend en paramètre a et b, et cette fonction va retourner a+b, donc la somme de deux nombres.
    return a+b
}

const somme = tableauNotes.reduce(calcul)   //La fonction reduce renvoie une seule valeur, donc là, la somme de tous les nombres du tableau. (le calcul que l'on a fait au dessus)


const moyenne = somme / tableauNotes.length //On crée une const moyenne qui va prendre la somme divisé par la taille du tableau

console.log(moyenne)










