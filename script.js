function update() {
    const now = new Date();
    const hour =  now.toLocaleTimeString("es-ES");
    document.getElementById("clock").textContent = hour;
}
update();
setInterval(update, 1000);