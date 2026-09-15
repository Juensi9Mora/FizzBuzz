// Desafío FizzBuzz/

// 1. Este programa debe imprimir los números del 1 al 1000
for (let i = 1; i <= 1000; i++) {
    // Reemplaza esta línea con tu lógica 
    // Escribe tu lógica de FizzBuzz aquí~
    // - Si es divisible por ambos, imprime "Fizzbuzz" (con "b" minúscula)
    if (i % 3 === 0 && i % 5 === 0 ) {
        let texto = "Buzz"
        console.log("Fizz"+ texto.toLowerCase());
    }
    // - Si es divisible por 3, imprime "Fizz"
    else if(i % 3 === 0) {
    console.log("Fizz");
    }
    // - Si es divisible por 5, imprime "Buzz"
    else if (i % 5 === 0){
    console.log("Buzz"); 
    }
    // - Si no, imprime el número
    else{
    console.log(i);

}
}
// 2. Mensaje unicamente al final ´opcional´
console.log("Felicitaciones completaste los 1000 números, ahora continua con tu aprendizaje");
    