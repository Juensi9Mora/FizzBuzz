// Evaluación de Laboratorio de JavaScript: Calculadora Básica

// Objetivo:
// Diseña y construye una calculadora que pueda sumar, restar, multiplicar y dividir dos números.

// Instrucciones:
// Completa las partes faltantes del código a continuación. Piensa cuidadosamente en el orden de las condiciones.
// Debes manejar correctamente las operaciones +, -, * y / usando lógica condicional.

// Ejemplo de uso:
// node calculator.js 10 5 +
// Salida: 15

// Paso 1: Obtener los valores de entrada desde la línea de comandos
const args = process.argv.slice(2);

// Convertir las dos primeras entradas a números
const num1 = Number(args[0]);
const num2 = Number(args[1]);

// Obtener el operador (ej. "+", "-", "*", "/")
const operator = args[2];

// Variable para almacenar el resultado final
// Paso 2: Decidir qué operación realizar
// Pistas:
// - Usa sentencias if, else if y else para verificar el operador y realizar la operación correspondiente.
// - Asegúrate de usar el operador de igualdad estricta (===) para comparar
// tanto el valor como el tipo de la entrada.
// Esto ayuda a evitar errores causados por la conversión automática de tipos de JavaScript.
let result;
// Escribe tu primera condición a continuación
if (operator === "+") {
    result = num1 + num2;
// Continúa con la siguiente condición
}else if(operator === "-"){
    result = num1 - num2;
// Continúa con la siguiente condición
}else if ( operator === "*"){
    result = num1 * num2;
 // Agrega más condiciones   
 }else if (operator === "/"){
// Bonus: Maneja el caso donde el segundo número es 0 durante la división
    if (num2 === 0) {
    result = "No se puede dividir por cero";
 } else result = num1 / num2;      
// Si el operador no es válido, almacena "Operador inválido" en el resultado    
}else{
    result = "Operador inválido";
}

// Paso 3: Imprimir el resultado
console.log(result);