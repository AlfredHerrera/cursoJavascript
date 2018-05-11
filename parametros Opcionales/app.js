 let saludo = (mensaje, tiempo) => {

     // parametro opcionales con el ES5
     mensaje = mensaje || 'hola mundo';

     setTimeout(() => {
         console.log(mensaje);
     }, tiempo);
 };

 saludo();


 // parametros opcionales con el ES6

 let saludo2 = (mensaje = 'Hola mundo 2', tiempo) => {

     setTimeout(() => {
         console.log(mensaje);
     }, tiempo);

 };

 saludo2();


 // puedes mandar funciones como parametros por defecto

 let saludo3 = (mensaje = fnTemporal) => {

     mensaje();

 };

 let fnTemporal = () => {

     console.log('hola mundo como estas');
 };

 saludo3();


 // tambien se puede poner como parametros objetos 

 let saludo4 = (mensaje = {
     nombre: 'carlos'
 }) => {
     console.log(mensaje);
 };

 saludo4();


 // las funcion argumentes con los valores opcionales queda afectada y no funciona si quieres usar la funcion argumentes
 // no tienes que declara valores opcinales como parametros