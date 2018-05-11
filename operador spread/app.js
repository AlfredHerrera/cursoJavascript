// el opresador spread permite especificar un arrelgo que sera separado y cado valor sera independiente

let numeros = [1, 4, 5, 20, 60, 100, 200];

// lo sque hace es que busca el numero mas alto de esos numero y lo muestra
var max = Math.max.apply(Math, numeros);

console.log(max);

// hace lo mismo pero menos codigo y mas entendible
let maximo = Math.max(...numeros);
console.log(maximo);