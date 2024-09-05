
var dataReload = document.querySelectorAll("[data-reload]");

var language = {
    en: {
        login:"Login",
        email:"Email",
        phoneNumber:"Phone Number",
        password:"Password",
        forget:"Forget Password",
        noAcoount:"don't have an account?",
        signup:"Signup",
        dark:"Dark",
        light:"Light",
        languagee:"Language",
        sureSave:"Do you want to save changes?",
        yes:"Yes",
        no:"No"
    },
    ar: {
        login:"تسجيل الدخول",
        email:"البريد الالكتروني",
        phoneNumber:"رقم الهاتف",
        password:"كلمة السر",
        forget:"نسيت كلمة السر",
        noAcoount:"ليس لديك حساب؟ ",
        signup:"تسجيل",
        dark:"مظلم",
        light:"ضوء",
        languagee:"اللغة",
        sureSave:"هل تريد حفظ التغييرات؟",
        yes:"نعم",
        no:"كلا"     
    },
    fr:{
        login: "Connexion",
        email: "Email",
        phoneNumber: "Numéro de téléphone",
        password: "Mot de passe",
        forget: "Mot de passe oublié",
        noAcoount: "Vous n'avez pas de compte?",
        signup: "Inscription",
        dark:"Sombre",
        light:"Lumière",
        languagee:"Langue",
        sureSave:"Voulez-vous enregistrer les modifications?",
        yes:"Oui",
        no:"Non"
    },
    gr:{
        login: "Einloggen",
        email: "E-Mail",
        phoneNumber: "Telefonnummer",
        password: "Passwort",
        forget: "Passwort vergessen",
        noAcoount: "Haben Sie kein Konto?",
        signup: "Registrierung",
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
    lang = window.location.hash.substring(1) || 'en'; // Default to English if no hash
    if (language[lang]) {
        document.getElementById("login").textContent = language[lang].login;
        document.getElementById("email").placeholder = language[lang].email;
        document.getElementById("password").placeholder = language[lang].password;
        document.getElementById("button").value = language[lang].login;
        document.getElementsByClassName("forget-pwd")[0].textContent= language[lang].forget;
        document.getElementById("noAccount").textContent= language[lang].noAcoount;
        document.getElementById("sig").textContent= language[lang].signup;
        document.getElementById("sure-save").textContent = language[lang].sureSave;
        document.getElementById("yes").textContent = language[lang].yes;
        document.getElementById("no").textContent = language[lang].no;
        document.getElementById("dark-button").textContent = language[lang].dark;
        document.getElementById("light-button").textContent = language[lang].light;
        document.getElementById("bobutton").textContent = language[lang].languagee;
    }
    if(lang ==="ar"){
        var x = document.getElementsByTagName("input");
        for(let i=0; i < x.length -1 ; i++){
            x[i].style.direction="rtl";
        }
    }else{
        var x = document.getElementsByTagName("input");
        for(let i=0; i < x.length -1 ; i++){
            x[i].style.direction="ltr";
        }
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
    document.getElementById("login").style.background="#008170"
    document.getElementById("login").style.webkitBackgroundClip="text";
    document.getElementById("login").style.webkitTextFillColor="transparent";
    document.getElementById("bobutton").style.background="#005B41";
    document.getElementById("dark-button").style.background="#005B41"; 
    document.getElementById("light-button").style.background="#005B41";
    document.getElementById("button").style.background="#005B41";
    document.getElementById("sig").style.color="#008170";
    var x = document.getElementsByTagName("input");
    for(let i=0; i < x.length -1 ; i++){
        x[i].style.borderBottomColor="black"
    }
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
    document.getElementById("login").style.background=" linear-gradient(180deg, #508D4E -14.81%, #161313 100%)";
    document.getElementById("login").style.webkitBackgroundClip="text";
    document.getElementById("login").style.webkitTextFillColor="transparent";
    document.getElementById("bobutton").style.background="#7C8761AB";
    document.getElementById("dark-button").style.background="#7C8761AB"; 
    document.getElementById("light-button").style.background="#7C8761AB";
    document.getElementById("button").style.background="#7C8761AB";
    document.getElementById("sig").style.color="#406e3e";
    var x = document.getElementsByTagName("input");
    for(let i=0; i < x.length -1 ; i++){
        x[i].style.borderBottomColor="#406e3e"
    }
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