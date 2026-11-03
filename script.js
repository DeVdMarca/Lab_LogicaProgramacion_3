
const entradaUsuario = prompt("Por favor, ingresa un número entero positivo para calcular su factorial:");

const numero = parseInt(entradaUsuario, 10);

const elementoResultado = document.getElementById("resultado");


if (Number.isNaN(numero) || numero < 0 || numero !== parseFloat(entradaUsuario)) {
    
    const mensajeError = "Error: Debes ingresar un número entero positivo válido.";
    
    console.error(mensajeError);                 // Mensaje en consola
    elementoResultado.innerText = mensajeError;  // Mensaje en el DOM
    elementoResultado.style.borderLeftColor = "red";

} else {
    
     let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }

    const mensajeExito = `El factorial de ${numero}! es: ${factorial}`;

    
    console.log(mensajeExito);                 // Salida en consola
    elementoResultado.innerText = mensajeExito; // Salida en el DOM
}
