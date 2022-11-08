var estadoLicuadora = "apagado";
var licuadora = document.getElementById("blender");
var sonidoLicuadora = document.getElementById("blender-button-sound");
var botonLicuadora = document.getElementById("blender-sound");

function controlarLicuadora() {
    if (estadoLicuadora == "apagado") {
        estadoLicuadora = "encendido";
        hacerRuido();
        licuadora.classList.add("active");
        console.log("Usted siempre me... enciende");
    } else {
        estadoLicuadora = "apagado"
        hacerRuido();
        licuadora.classList.remove("active");
        console.log("me apagaste")
    }
}

function hacerRuido(){
    if (sonidoLicuadora.paused) {
        botonLicuadora.play();
        sonidoLicuadora.pause();
    } else {
        botonLicuadora.play();
        sonidoLicuadora.play();
        sonidoLicuadora.currentTime = 0;
    }
}