const toto = "t*to"

let special = false //On initialise special a false par défaut. On part du principe qu'il n'y a pas de caractère spécial par défaut.

for (let elt of toto) { //Je boucle sur ma chaine de caractère
    if (elt = "%" || elt === "$" || elt ==="*") { // Si une des lettre est égale à un des caractère spécial cité :
        special = true  //Alors on fait passer la valeur false de special à true
    } else {
        //On ne met rien car special est déjà à false par défaut
    }
}

//On voit si le special a changé ou non (dans ce cas oui, car il y a une * dans toto)

if (special  === true) {   //Donc si special est devenu true
    console.log("Il y a un caractère spécial") //On indique qu'il y a un caractère spécial en console
} else {    // Sinon
    console.log("Pas de caractère spécial") //On indique en console qu'il n'y a pas de caractère spécial
} 




