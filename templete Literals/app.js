let nombre = 'Alfredo';
let apellido = 'herrera';
let nombre_completo = 'el nombre completo es' + nombre + apellido;
// es con el ES5
console.log(nombre_completo);

// con el ES6 se usan templetes litares
let nombre_completo2 = `el nombre completo es  ${nombre} ${apellido}`;
console.log(nombre_completo2);

let hola = () => 'Alfredo Herrera';
let nombre_completo3 = `el nombre completo es  ${hola()}`;
console.log(nombre_completo3);