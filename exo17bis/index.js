const bonjour = "b*n%our"

//1e étape : on déclare une variable à false par défaut.
let isSpecial = false // On initialise isSpecial a false par défaut


//2e étape: On s'occupe de modifier la variable avec une condition. Si la condition est vraie, on modifie la variable
for (let elt of bonjour) { //pour chaque lettre de la chaine de caractère bonjour
    if(elt === "*" || elt === "%" || elt === "$") { //Si une des lettre correspond à un de ces caractères spéciaux
        isSpecial = true    //Alors on passe la variable à true
    } else {
        //Sinon, on ne change rien dans ce cas là puisque la variable est à false par défaut.
    }
}

//3e étape : on s'occupe maintenant de la consigne : changer le message qu'on souhaite dans la console si la variable a été changée depuis la condition au dessus

if(isSpecial === true) {    //Si la variable (initialement mise à false) est passée à true dans la condition 
    console.log("Il y a un caractère spécial")  //Alors, dans la console on va afficher qu'il y a un caractère spécial (ce qui est le cas ici, car on en a dans notree const bonjour)
}else {
    console.log("Il n'y a pas de caractère spécial")    //Si la variable n'est pas passée à true car aucun caractère spécial cité, alors on affiche en console qu'il n'y a pas de caractère spécial
}
