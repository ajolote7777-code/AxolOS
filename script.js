function update() {
    const now = new Date();
    const hour =  now.toLocaleTimeString("es-ES");
    document.getElementById("clock").textContent = hour;
}
update();
setInterval(update, 1000);
function DragElement(cajaprincipal){

    var initialX = 0;
    var initialY = 0;
    var currentX = 0;
    var currentY = 0;

    if(document.getElementById(cajaprincipal.id + "Header")){
        document.getElementById(cajaprincipal.id + "Header").onmousedown = startDragging;

    }
    else {
        cajaprincipal.onmousedown = startDragging;

    }
    function startDragging(e){
        e = e || window.Event;
        e.preventDefault();
        currentX = initialX - e.clientX;
        currentY = initialY - e.clientY;
        initialX = e.clientX
        initialY = e.clientY
        Element.style.top = (Element.offstetTop - currentY) + "px";
        Element.style.left =(Element.offsetLeft - currentX) + "px";

    }
    function stopDragging(){
        document.onmouseup = null;
        document.onmousemove= null;
    }

    }