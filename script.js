function update() {
    const now = new Date();
    const hour =  now.toLocaleTimeString("es-ES");
    document.getElementById("clock").textContent = hora;
}
update();
setInterval(update, 1000);