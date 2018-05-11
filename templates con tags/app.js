let unidades = 5,
    costo_unitario = 10;

let costo_total = `el costo por ${unidades} lapices es de ${unidades * costo_unitario}`;
console.log(costo_total);

// en la funcion etiquetas recibe dos parametros
// literales que son las palabras
// y las substituciones que son las los que van adentro de ${}
let etiquetas = (literales, ...substituciones) => {

    let resultado = "";
    console.log(literales);
    console.log(substituciones);

    for (let i = 0; i < substituciones.length; i++) {

        resultado += literales[i];
        resultado += substituciones[i];

    }

    // retornamos el resultado
    return resultado;

};


// con la funcion etiquetas antes del los ``funciona para analisas el las sustictuciones y poder cambiar en la funcion
let costo_total2 = etiquetas `el costo por ${unidades} lapices es de ${unidades * costo_unitario}`;

console.log(costo_total2);