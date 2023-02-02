// COPY TO CLIPBOARD EXO1

const copyButton = document.getElementById('CopyCodeExo1');
copyButton.addEventListener('click', (event) => {
    const content = document.getElementById('CodeExo1').textContent;
    navigator.clipboard.writeText(content);
})

// COPY TO CLIPBOARD EXO2

const copyButton2 = document.getElementById('CopyCodeExo2');
copyButton2.addEventListener('click', (event) => {
    const content = document.getElementById('CodeExo2').textContent;
    navigator.clipboard.writeText(content);
})

// COPY TO CLIPBOARD EXO3

const copyButton3 = document.getElementById('CopyCodeExo3');
copyButton3.addEventListener('click', (event) => {
    const content = document.getElementById('CodeExo3').textContent;
    navigator.clipboard.writeText(content);
})

// COPY TO CLIPBOARD EXO4

const copyButton4 = document.getElementById('CopyCodeExo4');
copyButton4.addEventListener('click', (event) => {
    const content = document.getElementById('CodeExo4').textContent;
    navigator.clipboard.writeText(content);
})

// EXERCICE 01

const ageButton = document.getElementById('btnage');
var myArray = new Array();
n = 1;
y = 0;
var hundred = false;
let x = 0;
let jeune =0 ;
let moyens = 0;
let vieux = 0;
let und = 0;

// FAIRE EN SORTE QUE CA FONCTIONNE QUAND ON APPUIE SUR ENTRE AUSSI!!!!!
let input = document.getElementById("age");
input.addEventListener("keypress", (event) => {
    if (event.key == "Enter"){
        event.preventDefault();
        ageButton.click();
    }
});

// BUTTON CLICK EVENT

ageButton.addEventListener('click', function exo1 () {
    document.getElementById("exo1text").innerHTML = "";
    // PAS DE WHILE VU QUE UTILISATION D'UN ADDEVENTLISTENER
    // GET AGE FROM INPUT
        myArray[y] = parseFloat(document.getElementById("age").value);
        document.getElementById("age").value=""; //remettre une valeur vide dans l'input après avoir récupérer la valeur entré par l'utilisateur
        if (myArray[y] >= 100)
        {
            hundred = true;
        }
        y++;
        n++;

    document.getElementById("exo1text").innerHTML = ("<br> Voici la liste des âges que vous avez donnez: " + myArray + "<br>");

    // CHECKING  IF < 20 = JEUNE; IF > 40 = VIEUX; ELSE = MOYENS; +NAN INFOS

    let arrLen = myArray.length;

    if (hundred==true) {
        while ( x < arrLen)
{

    if ( myArray[x] < 20 )
    {
        console.log(myArray[x] + " = jeune")
        jeune++;
    }

    else  if (isNaN(myArray[x]) == true)
    {
        und++;
    }

    else if ( 40 < myArray[x] )
    {
        console.log(myArray[x] + " = vieux")

        vieux++;
    }

    else if ( 20 <= myArray[x] <= 40)
    {
        console.log(myArray[x] + " = moyen")

        moyens++;
    }

    x++;
}

document.getElementById("exo1text").innerHTML += ("<br> Dans les " + arrLen + " âges que vous nous avez données, il y a: <br>" + jeune + " personnes de moins de 20 ans. <br>" + 
moyens + " personnes entre 20 et 40 ans. <br>" + vieux + " personnes de plus de 40 ans. <br><br>" + "Il y a également " + und + " données non-numérique.");


y=0;
myArray= new Array();
hundred=false;}
});


// EXERCICE 02

function TableMultiplication (number){
  let y = 1;
  results = 0 ;
  while ( y <= 10) {
      results = number * y;
      document.getElementById("mulitiplicationexo2").innerHTML += (y + " x " + number + " = " + results + "<br>");
      y++;
  }
}

TableMultiplication(7);

// EXERCICE 03

const prenomButton = document.getElementById('btnPRENOM');

// FAIRE EN SORTE QUE CA FONCTIONNE QUAND ON APPUIE SUR ENTRE AUSSI!!!!!
let inputexo2 = document.getElementById("prenom");
inputexo2.addEventListener("keypress", (event) => {
    if (event.key == "Enter"){
        event.preventDefault();
        prenomButton.click();
    }
});

// BUTTON CLICK EVENT
prenomButton.addEventListener('click', (event) => {

    var tab = ["audrey", "aurélien", "flavien", "jérémy", "laurent", "melik", "nouara", "salem", "samuel", "stéphane"];
console.log (tab);

let search = document.getElementById("prenom").value;
search = search.toLowerCase();
var searching = tab.indexOf(search);

if ( searching != -1)
{
    document.getElementById("exo3text").innerHTML = ("<br>Trouvé! <br> Vous avez trouvez le prénom " + search);
    tab.splice(searching, 1);
    tab.push(" ");
}
else
{
    document.getElementById("exo3text").innerHTML = ("<br>Perdu! <br> Le prénom " + search + " n'est pas dans la liste!");
    trouve = false;
}

document.getElementById("exo3text").innerHTML += ("<br> Nouvel array: " + tab);
document.getElementById("prenom").value = "";
    
});

// EXERCICE 04

const puqteButton = document.getElementById('btnPUQTE');

// FAIRE EN SORTE QUE CA FONCTIONNE QUAND ON APPUIE SUR ENTRE AUSSI!!!!!
let inputexo4 = document.getElementById("prixU");
inputexo4.addEventListener("keypress", (event) => {
    if (event.key == "Enter"){
        event.preventDefault();
        puqteButton.click();
    }
});

// FAIRE EN SORTE QUE CA FONCTIONNE QUAND ON APPUIE SUR ENTRE AUSSI!!!!!
let inputexo4_2 = document.getElementById("QTEc");
inputexo4_2.addEventListener("keypress", (event) => {
    if (event.key == "Enter"){
        event.preventDefault();
        puqteButton.click();
    }
});

puqteButton.addEventListener('click', (event) => {
PU = parseFloat(document.getElementById("prixU").value);
QTECOM = parseFloat(document.getElementById("QTEc").value);
TOT = PU*QTECOM;
PORTINI = 0;

// CALCULE REMIS

if (TOT <= 100) {
    REM = "0";
    REMPOUR = "0%";
}

else if (TOT <= 200) {
    REM = (TOT * 0.05);
    TOT = TOT - REM;
    REMPOUR = "5%";
}

else if (TOT > 200) {
    REM = (TOT * 0.10);
    TOT = TOT - REM;
    REMPOUR = "10%";
}

else {
    document.getElementById("exo4text").innerHTML = ("<br> <p class='text-danger fw-bold'>! ATTENTION ! Une des données saisies n'était pas un nombre!</p>");
    return false;
}

// CALCUL PORT

if (TOT < 500) {
    PORT= TOT * 0.02;

    //// AJOUT PORT MINIMAL A 6E
    if (PORT < 6) {
        PORTINI = PORT;
        PORT = 6;
    }

    TOT_PORT= TOT + PORT;
    PORTPOUR = "2%";
}

else {
    PORT= TOT * 0.0;
    TOT_PORT= TOT + PORT;
    PORTPOUR = "0%";
}

// OUTPUT REM

document.getElementById("exo4text").innerHTML = ("<br> Remise de " + REMPOUR + " (-" + REM + "€)" + "<br> Total sans frais de: " + TOT.toFixed(2) +"€;");

// OUTPUT PORT

if (PORT !=6){
  document.getElementById("exo4text").innerHTML += (" avec frais de port de " + PORTPOUR + " soit +" + PORT.toFixed(2) + "€ à payer" + "<br> Pour un total de: " + TOT_PORT.toFixed(2) + "€");
}

else {
    document.getElementById("exo4text").innerHTML += (" avec frais de port de " + PORTPOUR + " soit +" + PORTINI.toFixed(2) + ", donc le minimum s'applique, soit +" + PORT.toFixed(2)
     + "€ à payer" + "<br> Pour un total de: " + TOT_PORT.toFixed(2) + "€");
}
});