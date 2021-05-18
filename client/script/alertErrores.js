const container = document.getElementById("container");
const inputUsuario = document.getElementById("input-usuario");
const inputPassword = document.getElementById("input-password");
const inputPasswordRepeat = document.getElementById("input-passwordRepeat");
const submitRegister = document.getElementById("btn-submit");
const msgDatosIncomp = "Faltan completar datos!";
const msgPassIncorrectas = "Las contraseñas no son iguales!";

document.addEventListener("change",function(){
    const alertas = document.createElement("p");
    if(inputUsuario.value == "" || inputPassword.value == ""|| inputPasswordRepeat.value == ""){
        container.innerHTML = "";
        alertas.innerHTML = msgDatosIncomp;
        container.appendChild(alertas);
        container.classList.add("alert");
    } else if(inputPassword.value !== inputPasswordRepeat.value){
        container.innerHTML = "";
        alertas.innerHTML = msgPassIncorrectas;
        container.appendChild(alertas);
        container.classList.add("alert");
    } else if(inputPassword.value === inputPasswordRepeat.value){
        container.innerHTML = "";
        container.classList.remove("alert");
    }    
});


