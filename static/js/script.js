const COURRIEL_REGEX = /^\S+@\S+\.\S+$/;
const EMPTY_REGEX = /^$/;
const CP_REGEX = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
const ADRESSE_REGEX = /\d+(\s\w+)/;
const VILLE_REGEX = /\D+/;

let nom = document.getElementById("nom");
let espece = document.getElementById("espece");
let race = document.getElementById("race");
let age = document.getElementById("age");
let description = document.getElementById("description");
let courriel = document.getElementById("courriel");
let adresse = document.getElementById("adresse");
let ville = document.getElementById("ville");
let cp = document.getElementById("cp");
let form = document.getElementById("form");

let emptyNom = document.getElementById("empty-nom");
let emptyEspece = document.getElementById("empty-espece");
let emptyRace = document.getElementById("empty-race");
let emptyAge = document.getElementById("empty-age");
let emptyDescription = document.getElementById("empty-description");
let emptyCourriel = document.getElementById("empty-courriel");
let emptyAdresse = document.getElementById("empty-adresse");
let emptyVille = document.getElementById("empty-ville");
let emptyCp = document.getElementById("empty-cp");

let invalidVille = document.getElementById("invalid-ville");
let invalidAdresse = document.getElementById("invalid-adresse");
let invalidCp = document.getElementById("invalid-cp");
let invalidCourriel = document.getElementById("invalid-courriel");
let invalidAge = document.getElementById("invalid-age");
let lengthNom = document.getElementById("length-nom");
let commaNom = document.getElementById("comma-nom");
let commaEspece = document.getElementById("comma-espece");
let commaRace = document.getElementById("comma-race");
let commaAge = document.getElementById("comma-age");
let commaDescription = document.getElementById("comma-description");
let commaCourriel = document.getElementById("comma-courriel");
let commaAdresse = document.getElementById("comma-adresse");
let commaVille = document.getElementById("comma-ville");
let commaCp = document.getElementById("comma-cp");

function isEmpty(inputValue) {
    return EMPTY_REGEX.test(inputValue);
}

function containsComma(inputValue) {
    return inputValue.includes(",");
}

function getErrorCount() {
    let allErrorMsgArray = form.getElementsByClassName("error-msg");
    let displayedErrorMsgArray = [];

    for (let i = 0; i < allErrorMsgArray.length; i++) {
        if (window.getComputedStyle(allErrorMsgArray[i]).display == "block") displayedErrorMsgArray.push(allErrorMsgArray[i]);
    }
    return displayedErrorMsgArray.length;
}

function onChangeValidation() {
    nom.addEventListener("change", function(e) {
        if (!isEmpty(nom.value)) emptyNom.hidden = true;

        if (!(nom.value.length >= 3 && nom.value.length <= 20)) lengthNom.hidden = false;
        else lengthNom.hidden = true;

        if (containsComma(nom.value)) commaNom.hidden = false;
        else commaNom.hidden = true;
    });
    
    espece.addEventListener("change", function(e) {
        if (!isEmpty(espece.value)) emptyEspece.hidden = true;

        if (containsComma(espece.value)) commaEspece.hidden = false;
        else commaEspece.hidden = true;
    });
    
    race.addEventListener("change", function(e) {
        if (!isEmpty(race.value)) emptyRace.hidden = true;

        if (containsComma(race.value)) commaRace.hidden = false;
        else commaRace.hidden = true;
    });
    
    age.addEventListener("change", function(e) {
        if (!isEmpty(age.value)) emptyAge.hidden = true;

        if (age.value.includes(".") || containsComma(age.value)) commaAge.hidden = false;
        else commaAge.hidden = true;

        if (isNaN(age.value) || age.value < 0 || age.value > 30) invalidAge.hidden = false;
        else invalidAge.hidden = true;
    });
    
    description.addEventListener("change", function(e) {
        if (!isEmpty(description.value)) emptyDescription.hidden = true;

        if (containsComma(description.value)) commaDescription.hidden = false;
        else commaDescription.hidden = true;
    });
    
    courriel.addEventListener("change", function(e) {
        if (!isEmpty(courriel.value)) emptyCourriel.hidden = true;

        if (containsComma(courriel.value)) commaCourriel.hidden = false;
        else commaCourriel.hidden = true;

        if (!COURRIEL_REGEX.test(courriel.value)) invalidCourriel.hidden = false;
        else invalidCourriel.hidden = true;
    });
    
    adresse.addEventListener("change", function(e) {
        if (!isEmpty(adresse.value)) emptyAdresse.hidden = true;

        if (containsComma(adresse.value)) commaAdresse.hidden = false;
        else commaAdresse.hidden = true;

        if (!ADRESSE_REGEX.test(adresse.value)) invalidAdresse.hidden = false;
        else invalidAdresse.hidden = true;
    });
    
    ville.addEventListener("change", function(e) {
        if (!isEmpty(ville.value)) emptyVille.hidden = true;

        if (containsComma(ville.value)) commaVille.hidden = false;
        else commaVille.hidden = true;

        if (!VILLE_REGEX.test(ville.value)) invalidVille.hidden = false;
        else invalidVille.hidden = true;
    });
    
    cp.addEventListener("change", function(e) {
        if (!isEmpty(cp.value)) emptyCp.hidden = true;

        if (containsComma(cp.value)) commaCp.hidden = false;
        else commaCp.hidden = true;

        if (!CP_REGEX.test(cp.value)) invalidCp.hidden = false;
        else invalidCp.hidden = true;
    });
}

function onSubmitValidation() {
    form.addEventListener("submit", function(e) {
        if (isEmpty(nom.value)) {
            e.preventDefault();
            emptyNom.hidden = false;
        }
        if (isEmpty(espece.value)) {
            e.preventDefault();
            emptyEspece.hidden = false;
        }
        if (isEmpty(race.value)) {
            e.preventDefault();
            emptyRace.hidden = false;
        }
        if (isEmpty(age.value)) {
            e.preventDefault();
            emptyAge.hidden = false;
        }
        if (isEmpty(description.value)) {
            e.preventDefault();
            emptyDescription.hidden = false;
        }
        if (isEmpty(courriel.value)) {
            e.preventDefault();
            emptyCourriel.hidden = false;
        }
        if (isEmpty(adresse.value)) {
            e.preventDefault();
            emptyAdresse.hidden = false;
        }
        if (isEmpty(ville.value)) {
            e.preventDefault();
            emptyVille.hidden = false;
        }
        if (isEmpty(cp.value)) {
            e.preventDefault();
            emptyCp.hidden = false;
        }

        if (getErrorCount() != 0) e.preventDefault();
    });
}

onChangeValidation();
onSubmitValidation();
