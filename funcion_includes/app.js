var saludo = '¡Hola mundo!';

// existe unel carecter h en la primera letra de la variable
console.log(saludo.substr(0, 1) === 'h'); // Devuelve un true ES5 

// Existe la oracion  Hola en la la variable
console.log(saludo.startsWith('Hola')); // Devuelve un true ES6

// Termina la oracion con !
console.log(saludo.endsWith('!')); // Devuelve un true  ES6

// podemos preguntar si existe una x en una variable
console.log(saludo.includes('x')); // Devuelve un false ES6

//