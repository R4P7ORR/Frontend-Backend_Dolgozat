import "./node_modules/bootstrap/dist/css/bootstrap.css"
import "./style.css"


function pushResult(){
    let inputURL = document.getElementById("inputURL").value;
    let imageWidth = document.getElementById("inputWidth").value;
    let borderWidth = document.getElementById("borderWidth").value;
    let borderColor = document.getElementById("borderColor").value;
    let output = document.getElementById("outputImage");
    output.setAttribute("src", inputURL);
    output.setAttribute("width", imageWidth);
    output.style.borderWidth = borderWidth +"px";
    output.style.borderColor = borderColor;
}
function setLightDarkMode(){
    let element = document.body;
    element.classList.toggle("dark-mode")
}
document.getElementById("inputURL").addEventListener("change", pushResult);
document.getElementById("inputWidth").addEventListener("change", pushResult);
document.getElementById("borderWidth").addEventListener("change", pushResult);
document.getElementById("borderColor").addEventListener("change", pushResult);
document.getElementById("lightDarkMode").addEventListener("click", setLightDarkMode);
//document.getElementById("sendButton").addEventListener("click", pushResult)