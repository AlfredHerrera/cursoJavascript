// los parametros rest es indicado con tres puntos (...) seguido del nombre que le asignaremos a dicho parametro
// Ese parametro se convierte en un arrelfo que contiene el "resto" de los parametros pasados a la funcion

// la dos unicas restrincciones del parametro rest es que solo puede existe un parametro rest en la funcion
//  y que el prametro rest siempre debe de ir como ultimo parametro

let agregar_alumno = (arr_alumnos, ...alumnos) => {

    // console.log(arguments);

    for (let i = 0; i < alumnos.length; i++) {
        arr_alumnos.push(alumnos[i]);
    }

    return arr_alumnos;

};

let alumnos_arr = ['Alfredo'];

let alumnos_arr2 = agregar_alumno(alumnos_arr, 'fernanfo', 'poncho', 'bronco');

console.log(alumnos_arr2);