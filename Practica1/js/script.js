// lkshdlas ctrl + k +c
// jhsagkjsd ctr +k+u
// w3schools

console.log("Hola Mundo");
var num=1;
var num2=2.0;
var num3=34.78;
//float (todas las variables que tengan puntos)
var cadena="y este es un string";
var letra='C';
var texto="lorem impsum ipsum ipsum ipsum";

var suma=num+num2; //<este resultado para la primera consola.
var multiplicacion=num*num3;

console.log("la suma de num y num 2 es igual a "+ suma);
console.log("la multiplicacion de num y num3 es igual a "+ multiplicacion);
// Este es un boleano
 var covid=true;

 console.log(covid);
 //if tradicional
 if (covid==true) {
     console.log("PFFFFFF");
 }
 else{
    console.log("Felicidades puedes seguir viviendo un dia más.");
 }

 var dia1="lunes";
 var dia2="martes";
 var dia3="miercoles";

 console.log(dia1);
 var dias=["Lunes","Martes","Miercoles","Jueves",
"Viernes","Sabado","Domingo"];

console.log(dias);

console.log('El total de elementos es '+dias.length);
dias.push("no hay dias");
console.log(dias);

var meses=[324];
console.log(meses);
meses.push("Enero");
console.log(meses);
meses.push(true);

meses.forEach(m => {
    console.log(m);
});

// Foreach en java y c#
//forEach(var item in array/lista){
//     lo que se va  ahacer con ese elemento
// }

/* Operadores y reglas de asignacion */
var nombres="jhsadkdas";
var dato="hola mundo";
console.log(dato);
nombres=dato;
console.log(nombres);

var numero=5;
console.log(numero);
++numero;// numero +1
console.log(numero);
--numero;//numero -1
console.log(numero);
var data;
data=numero**5;
//numero*numero*numero*numero*numero
console.log(data);

var add=++data + 23;

console.log(add);

//Logicos
var mentira=false;
if(mentira){
    console.log("ok es lunes");
}
else{
    console.log("ni modo");
}