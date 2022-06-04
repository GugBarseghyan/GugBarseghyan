let DarkModeBtn = document.querySelector(".DarkMode");
let LightModeBtn = document.querySelector(".LightMode");
let body = document.body;
let gugDiv = document.querySelector("gug");

function DarkMode(){
    gugDiv.classList.remove("gugD");
    gugDiv.classList.toggle("gugL");
    DarkModeBtn.style.display = "none";
    LightModeBtn.style.display = "inline";
    body.style.backgroundColor = "#303030";
}
function LightMode(){
    gugDiv.classList.remove("gugL");
    gugDiv.classList.toggle("gugD");
    LightModeBtn.style.display = "none";
    DarkModeBtn.style.display = "inline";
    body.style.backgroundColor = "#ffff50";
}