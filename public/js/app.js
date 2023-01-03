// // EXO 1
// let moha = {
//     nom : 'brd',
//     prenom : 'moha',
//     age : 19,
//     taille : '170',

// }

// console.log(moha.age);

//EXO 2

// let johnny = {
//     nom : 'jones',
//     prenom : 'johnny',
//     age : 29,
//     taille : '180',

// }

// console.log(johnny);

// let franklin = {

// }

// console.log(franklin);

//EXO 3

// let johnny = {
//     nom : 'jones',
//     prenom : 'johnny',
//     age : 29,
//     taille : '180',

// }

// console.log(johnny);

// let franklin = {}


// franklin.nom = moha.nom;
// franklin.age = johnny.age;
// franklin.taille = 180;

// console.log(franklin); 


// let bob = {
//     nom : 'bob',
//     prenom : 'le bricoleur',
//     sePresenter(){
//         console.log(`Bonjour je m'appelle ${bob.nom} ${bob.prenom}`);
//     }

// }

// bob.sePresenter()

//EXO 4

let objet = {
    nom : "Blob",
    age : 19,
    changementAge() {
        objet.age = prompt("changer son âge");
        alert(`${objet.nom} a ${objet.age} ans`);
    }
}

objet.changementAge()