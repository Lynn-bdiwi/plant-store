
var dataReload = document.querySelectorAll("[data-reload]");

var language = {
    en: {
        code:"Inter Code",
        sentCode:"The verification code has been sent to your email",
        instruction:"The code consists of 6 digits containing letters and numbers and is valid for 10 minutes.",
        verify:"verify",
        dark:"Dark",
        light:"Light",
        languagee:"Language",
        sureSave:"Do you want to save changes?",
        yes:"Yes",
        no:"No"
    },
    ar: {
        code:"أدخل الرمز",
        sentCode:"تم ارسال رمز التحقق الى بريدك الالكتروني",
        instruction:"الرمز مؤلف من 6 خانات يتضمن أحرف وأرقام وهو صالح لمدة 10 دقائق.",
        verify:"تحقق",
        dark:"مظلم",
        light:"ضوء",
        languagee:"اللغة",
        sureSave:"هل تريد حفظ التغييرات؟",
        yes:"نعم",
        no:"كلا"      
    },
    fr:{
        code: "Code d'intervention",
        sentCode: "Le code de vérification a été envoyé à votre email",
        instruction: "Le code est composé de 6 chiffres contenant des lettres et des chiffres et est valide pendant 10 minutes.",
        verify: "Vérifier",
        dark:"Sombre",
        light:"Lumière",
        languagee:"Langue",
        sureSave:"Voulez-vous enregistrer les modifications?",
        yes:"Oui",
        no:"Non"
    },
    gr:{
        code: "Interner Code",
        sentCode: "Der Bestätigungscode wurde an Ihre E-Mail gesendet",
        instruction: "Der Code besteht aus 6 Ziffern mit Buchstaben und Zahlen und ist 10 Minuten gültig.",
        verify: "Überprüfen",
        dark:"Dunkel",
        light:"Licht",
        languagee:"Sprache",
        sureSave:"Möchten Sie die Änderungen speichern?",
        yes:"Ja",
        no:"Nein"
    }
};


var lang = localStorage.getItem("selectedLanguage");
var mode = localStorage.getItem("mode");


function updateContent() {
    const lang = window.location.hash.substring(1) || 'en'; // Default to English if no hash
    if (language[lang]) {
        document.getElementById("code").textContent = language[lang].code;
        document.getElementById("sentCode").textContent = language[lang].sentCode;
        document.getElementById("instruction").textContent = language[lang].instruction;
        document.getElementById("verify-button").value = language[lang].verify;
        document.getElementById("sure-save").textContent = language[lang].sureSave;
        document.getElementById("yes").textContent = language[lang].yes;
        document.getElementById("no").textContent = language[lang].no;
        document.getElementById("dark-button").textContent = language[lang].dark;
        document.getElementById("light-button").textContent = language[lang].light;
        document.getElementById("bobutton").textContent = language[lang].languagee;
    }
}

// Initial content update
updateContent();

// Event listener for hash change
window.addEventListener('hashchange', updateContent);

// Set up click events for language links
dataReload.forEach(link => {
    link.onclick = function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        window.location.hash = this.getAttribute('href'); // Change the hash
    };
});




function godark(){
    document.body.style.background="#232D3F";
    document.getElementById("code").style.background="#008170"
    document.getElementById("code").style.webkitBackgroundClip="text";
    document.getElementById("code").style.webkitTextFillColor="transparent";
    document.getElementById("sentCode").style.background="#008170"
    document.getElementById("sentCode").style.webkitBackgroundClip="text";
    document.getElementById("sentCode").style.webkitTextFillColor="transparent";
    document.getElementById("bobutton").style.background="#005B41";
    document.getElementById("dark-button").style.background="#005B41"; 
    document.getElementById("light-button").style.background="#005B41";
    document.getElementById("verify-button").style.background="#005B41";
    document.getElementById("sure-save").style.background="#005B41";
    document.getElementById("sure-save").style.webkitBackgroundClip="text";
    document.getElementById("sure-save").style.webkitTextFillColor="transparent";
    document.getElementById("no").style.background="#005B41";
    document.getElementById("no").style.webkitBackgroundClip="text";
    document.getElementById("no").style.webkitTextFillColor="transparent";
    document.getElementById("yes").style.background="#005B41";
}

function golight(){
    document.body.style.background=" linear-gradient(108.81deg, #7C8761 -21.51%, #80AF81 36.42%, rgba(26,83,25,0.9) 87.8%)";
    document.getElementById("code").style.background=" linear-gradient(180deg, #508D4E -14.81%, #161313 100%)";
    document.getElementById("code").style.webkitBackgroundClip="text";
    document.getElementById("code").style.webkitTextFillColor="transparent";
    document.getElementById("sentCode").style.background="#1A5319"
    document.getElementById("sentCode").style.webkitBackgroundClip="text";
    document.getElementById("sentCode").style.webkitTextFillColor="transparent";
    document.getElementById("bobutton").style.background="#7C8761AB";
    document.getElementById("dark-button").style.background="#7C8761AB"; 
    document.getElementById("light-button").style.background="#7C8761AB";
    document.getElementById("verify-button").style.background="#7C8761AB"; 
    document.getElementById("sure-save").style.background="#80AF81";
    document.getElementById("sure-save").style.webkitBackgroundClip="text";
    document.getElementById("sure-save").style.webkitTextFillColor="transparent";
    document.getElementById("yes").style.background="#7C8761AB";
    document.getElementById("no").style.background="#7C8761A1";
    document.getElementById("no").style.webkitBackgroundClip="text";
    document.getElementById("no").style.webkitTextFillColor="transparent";
}
var c = document.body.style.background;
mode = (c === "#232D3F") ? "dark" : "light";

function funDark(){
    godark();
    mode = localStorage.setItem("selectedMode", "dark");
    saveChangePopup();
}

function funLight(){
    golight();
    mode = localStorage.setItem("selectedMode", "light");
    saveChangePopup();
}

window.addEventListener('hashchange', saveChangePopup);

function saveChangePopup(){
    document.getElementById("save-popup").style.display = "block";
};
function hidesave(){
    document.getElementById("save-popup").style.display = "none";
}

   
const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");

yesButton.addEventListener("click", function(){
    localStorage.setItem('selectedLanguage', lang);
    localStorage.setItem('selectedMode', mode);
    hidesave();
    alert("changes saved!");
});

noButton.addEventListener("click", function(){
    hidesave();
});