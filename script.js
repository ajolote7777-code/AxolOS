function update() {
    const now = new Date();
    const hour =  now.toLocaleTimeString("es-ES");
    document.getElementById("clock").textContent = hour;
}
update();
setInterval(update, 1000);

dragElement(document.getElementById("cajaprincipal"))

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    
    var handle = document.getElementById("move" + elmnt.id);
    
    if (handle) {
        handle.onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        elmnt.style.transform = "none";
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;  
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
var welcomescreen = document.querySelector("#cajaprincipal")
function closeWindow(cajaprincipal){

    cajaprincipal.style.display = "none"

}
function openWindow(cajaprincipal){
    cajaprincipal.style.display = "block"
}
var welcomeopen = document.querySelector("#welcomeopen")
var welcomeclose = document.querySelector("#welcomeclose")
welcomeclose.addEventListener("click", function(){
    closeWindow(welcomescreen);
});
welcomeopen.addEventListener("click", function(){
    openWindow(welcomescreen);
});
var calcIcono = document.querySelector("#calc-icono");
var calcVentana = document.querySelector("#calc-ventana");
var calcClose = document.querySelector("#calc-close");
calcIcono.addEventListener("click", function(){
    openWindow(calcVentana);
});
calcClose.addEventListener("click", function(){
    closeWindow(calcVentana);
});
dragElement(document.getElementById("cajaprincipal"));
dragElement(document.getElementById("calc-ventana"));