const preguntarusuario = document.getElementById("Paginausuario");
const preguntarcorreo = document.getElementById("paginaEmail");
const preguntarcontraseña = document.getElementById("Paginacontraseña");
const nombreusuario = document.getElementById("usuario");
const correo = document.getElementById("email");
const contraseña = document.getElementById("contraseña");
const pantallafinal = document.getElementById('paginafinal');

console.log("hola");

preguntarcorreo.classList.add('hidden');
preguntarcontraseña.classList.add('hidden');
pantallafinal.classList.add("hidden")

const btnNext = document.getElementById('submit')

let algo = 0;
btnNext.addEventListener('click', function() {
    algo++;
    while (algo) {
        case1:
        preguntarusuario.classList.add("hidden");
        preguntarcorreo.classList.remove("hidden");

        case2:
        preguntarcorreo.classList.add("hidden");
        preguntarcontraseña.classList.remove("hidden");

        case3:
        preguntarcontraseña.classList.add("hidden");
        pantallafinal.classList.remove('hidden');
        

    }


});

