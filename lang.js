


var dataReload = document.querySelectorAll("[data-reload]");

var language = {
    en: {
        welcome:"Welcome to our store",
        logout:"Logout",
        sure:"Are you sure you want to log out?",
        cancel:"cancel",
        dark:"Dark",
        light:"Light",
        languagee:"Language",
        sureSave:"Do you want to save changes?",
        yes:"Yes",
        no:"No"
    },
    ar: {
        welcome:"أهلا بكم في متجرنا",
        logout:"تسجيل الخروج",
        sure:"هل متأكد تريد تسجيل الخروج؟",
        cancel:"الغاء",
        dark:"مظلم",
        light:"ضوء",
        languagee:"اللغة",
        sureSave:"هل تريد حفظ التغييرات؟",
        yes:"نعم",
        no:"كلا"
    },
    fr:{
        welcome: "Bienvenue dans notre magasin",
        logout: "Déconnexion",
        sure: "Êtes-vous sûr de vouloir vous déconnecter ?",
        cancel: "Annuler",
        dark:"Sombre",
        light:"Lumière",
        languagee:"Langue",
        sureSave:"Voulez-vous enregistrer les modifications?",
        yes:"Oui",
        no:"Non"
    },
    gr:{
        welcome: "Willkommen in unserem Geschäft",
        logout: "Ausloggen",
        sure: "Sind Sie sicher, dass Sie sich abmelden möchten?",
        cancel: "Abbrechen",
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
        document.getElementById("sure").textContent = language[lang].sure;
        document.getElementById("welcome-logout").value = language[lang].logout; // Use value for buttons
        document.getElementById("cancel").value = language[lang].cancel;
        document.getElementById("wel-logout-button").value = language[lang].logout; // Use value for buttons
        document.getElementById("welcome").textContent = language[lang].welcome; // Update welcome message
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
    document.getElementById("wel-logout-button").style.background="#005B41"
    document.getElementById("welcome").style.background="#008170"
    document.getElementById("welcome").style.webkitBackgroundClip="text";
    document.getElementById("welcome").style.webkitTextFillColor="transparent";
    document.getElementById("bobutton").style.background="#005B41";
    document.getElementById("dark-button").style.background="#005B41";
    document.getElementById("sure").style.background="#005B41";
    document.getElementById("sure").style.webkitBackgroundClip="text";
    document.getElementById("sure").style.webkitTextFillColor="transparent";
    document.getElementById("welcome-logout").style.background="#005B41";
    document.getElementById("cancel").style.background="#005B41";
    document.getElementById("cancel").style.webkitBackgroundClip="text";
    document.getElementById("cancel").style.webkitTextFillColor="transparent"; 
    document.getElementById("light-button").style.background="#005B41";

    document.getElementById("sure-save").style.background="#005B41";
    document.getElementById("sure-save").style.webkitBackgroundClip="text";
    document.getElementById("sure-save").style.webkitTextFillColor="transparent";
    document.getElementById("no").style.background="#005B41";
    document.getElementById("no").style.webkitBackgroundClip="text";
    document.getElementById("no").style.webkitTextFillColor="transparent";
    document.getElementById("yes").style.background="#005B41";
}
function golight(){
    document.body.style.background="linear-gradient(108.81deg, #7C8761 -21.51%, #80AF81 36.42%, rgba(26,83,25,0.9) 87.8%)";
    document.getElementById("wel-logout-button").style.background="#7C8761AB";
    document.getElementById("welcome").style.background="linear-gradient(180deg, #508D4E -14.81%, #161313 100%)"
    document.getElementById("welcome").style.webkitBackgroundClip="text";
    document.getElementById("welcome").style.webkitTextFillColor="transparent";
    document.getElementById("bobutton").style.background="#7C8761AB";
    document.getElementById("dark-button").style.background="#7C8761AB";
    document.getElementById("sure").style.background="#80AF81";
    document.getElementById("sure").style.webkitBackgroundClip="text";
    document.getElementById("sure").style.webkitTextFillColor="transparent";
    document.getElementById("welcome-logout").style.background="#7C8761AB";
    document.getElementById("cancel").style.background="#7C8761A1";
    document.getElementById("cancel").style.webkitBackgroundClip="text";
    document.getElementById("cancel").style.webkitTextFillColor="transparent"; 
    document.getElementById("light-button").style.background="#7C8761AB";

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

