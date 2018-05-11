// la Funcion repeat regresa un string la cantidad veces duplicado
let texto = 'hola';

// nos escribira en consola el "holahola"
console.log(texto.repeat((2)));

const espacios = 12;

let nombres = ['Alfredo', 'Christian', 'Eduardo'];
let numeros = ['4532210', '9087651', '7654321'];

for (let i in nombres) {

    let dif = espacios - nombres[i].length;

    console.log(nombres[i] + ' '.repeat(dif) + '|' + numeros[i]);

}

// te va imprimir en consola esto
// Alfredo     |4532210
// Christian   |9087651
// Eduardo     |7654321