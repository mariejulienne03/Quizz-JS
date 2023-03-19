// Récupération des données
let resultat = document.querySelector("#resultats"); 
const btn = document.querySelector("#valider"); 

let correctAnswers = ["correct", "correct", "correct", "correct"]; 
let resultats = []; 
const saisieU = document.querySelectorAll('input[type="radio"]'); // Type = radio 

// Vérifier si les réponses sont correctes et ont été cochées 
btn.addEventListener("click", function(event) {
  event.preventDefault();
  for (let i = 0; i < saisieU.length; i++) {
    if (saisieU[i].type == 'radio' && saisieU[i].value == "correct" && saisieU[i].checked == true) {
      resultats.push(saisieU[i].value);
    } else if (saisieU[i].type =='radio' && saisieU[i].value =="faux" && saisieU[i].checked == true){
      resultats.push(saisieU[i].value); 
    }
  }  
  console.log(resultats);
  comparerResultats(); 
});

function comparerResultats(){
  if(JSON.stringify(resultats) === JSON.stringify(correctAnswers)){
    console.log("bravo 5/5 !"); 
    resultat.innerHTML = "Vous avez un score de 5/5 FELICITATION PD"
  }
  else {
   // console.log("mauvaise(s) réponse(s)");
   // resultat.innerHTML = "Vous avez une ou plusieurs mauvaises réponses"; 
   nombreErreurs(); 
  }
}

function nombreErreurs(){
  let erreurs = resultats.filter(elem => elem !== "correct").length;
  switch(erreurs) {
    case 1:
      //console.log("Vous avez fait 1 erreur");
      resultat.innerHTML= "Vous avez fait 1 faute"
      break;
    case 2:
      //console.log("Vous avez fait 2 erreurs");
      resultat.innerHTML= "Vous avez fait 2 fautes"
      break;
    case 3:
      //console.log("Vous avez fait 3 erreurs");
      resultat.innerHTML= "Vous avez fait 3 fautes"
      break;
    case 4:
      //console.log("Vous avez fait 4 erreurs");
      resultat.innerHTML= "Vous avez fait 4 fautes"
      break;
    default:
      //console.log("OOPS");
  }
}


