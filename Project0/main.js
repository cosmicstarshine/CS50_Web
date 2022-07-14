var textField = document.getElementById("textField");
var clearButton = document.getElementById("clearField");
var toggle = document.getElementById("toggle");
var lightSVG = "M14 36q-5 0-8.5-3.5T2 24q0-5 3.5-8.5T14 12h20q5 0 8.5 3.5T46 24q0 5-3.5 8.5T34 36Zm0-3h20q3.75 0 6.375-2.625T43 24q0-3.75-2.625-6.375T34 15H14q-3.75 0-6.375 2.625T5 24q0 3.75 2.625 6.375T14 33Zm-.05-3.95q2.1 0 3.575-1.475T19 24q0-2.1-1.475-3.575T13.95 18.95q-2.1 0-3.575 1.475T8.9 24q0 2.1 1.475 3.575t3.575 1.475ZM24 24Z";
var darkSVG = "M14 36q-5 0-8.5-3.5T2 24q0-5 3.5-8.5T14 12h20q5 0 8.5 3.5T46 24q0 5-3.5 8.5T34 36Zm20-3q3.75 0 6.375-2.625T43 24q0-3.75-2.625-6.375T34 15H14q-3.75 0-6.375 2.625T5 24q0 3.75 2.625 6.375T14 33Zm.05-3.95q2.1 0 3.575-1.475T39.1 24q0-2.1-1.475-3.575T34.05 18.95q-2.1 0-3.575 1.475T29 24q0 2.1 1.475 3.575t3.575 1.475ZM24 24Z";
var body = document.getElementById("mainBody");

var storedPref = localStorage['darkMode'];
var darkMode;

if(null !== storedPref){
    try {
        darkMode = JSON.parse(storedPref);        
    } catch (error) {
        darkMode = window.matchMedia("(prefers-color-scheme:dark)").matches;
    }
    

}else{
    darkMode = window.matchMedia("(prefers-color-scheme:dark)").matches;
}


if(null != textField){
    textField.addEventListener("input", showClearButton);
}
window.onload = function(){
    setColorMode(darkMode);
    setDateTime();
    setInterval(setDateTime, 1000);    
}

function setDateTime(){
    var today = new Date();
    var date = today.toLocaleDateString();
    var time = today.toLocaleTimeString();
    document.getElementById("time").innerText = time;
    document.getElementById("date").innerText = date;
}

function toggleDarkMode(){
    darkMode = !darkMode;
    setColorMode(darkMode);
    localStorage['darkMode'] = JSON.stringify(darkMode);
}
function setColorMode(darkMode){
    if(darkMode === true){
        body.classList.add("dark");
        toggle.setAttribute("d", darkSVG);
    }else{
        body.classList.remove("dark");
        toggle.setAttribute("d", lightSVG);
    }
}
function focusSearch(){
    textField.focus();
}
function clearField(){
    textField.value = "";
    showClearButton();
}

function showClearButton(){
    if(null === textField.value || textField.value === ""){
        clearButton.style.visibility = "hidden";

    }else{
        clearButton.style.visibility = "visible";
    }
}