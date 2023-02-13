/*let miNombre;
//miNombre = "Diego";
miNombre = prompt('Nombre');

let miApellido;
//miApellido = "Diaz";
miApellido = prompt('apellido');

let miEdad;
//miEdad = 27;
miEdad = prompt('edad');

let miMascota;
//miMascota = "Naranja";
miMascota = prompt('Mascota');

let edadMascota;
//edadMascota = 5;
edadMascota = prompt('edadMascota');

console.log(miNombre,miApellido,miEdad,miMascota,edadMascota);

let nombreCompleto = miNombre + " " + miApellido;
let textoPresentacion = nombreCompleto + " " + miEdad + " " + miMascota + " " + edadMascota;

console.log(textoPresentacion);

let sumaEdades = miEdad + edadMascota;
let restaEdades = miEdad - edadMascota;
let productoEdades = miEdad * edadMascota;
let divisionEdades = miEdad / edadMascota;

console.log(sumaEdades);
console.log(restaEdades);
console.log(productoEdades);
console.log(divisionEdades); */

var Alumno = {
    aNombre: "jose",
    aApellido: "Diaz",
    aEdad: 20,
    aMaterias: 5,
    aPromedio: 7
};

console.table(Alumno);
console.log(Alumno.aNombre);
console.log(Alumno.aApellido);
console.log(Alumno.aEdad);
console.log(Alumno.aMaterias);
console.log(Alumno.aPromedio);

var Mascota = {
    mNombre: "naranja",
    mApellido: "Diaz",
    mEdad: 2,
    mColor: "Naranja",
    mDuenos: 7
};

console.table(Mascota);
console.log(Mascota.mNombre);
console.log(Mascota.mApellido);
console.log(Mascota.mEdad);
console.log(Mascota.mColor);
console.log(Mascota.mDuenos);

let frutas = ["manzana","naranja","banana","pera","frutilla"];
frutas.forEach(function(fruta, index) {
    console.log(`${index} : ${fruta}`);
});
console.log(frutas[0]);

let numeros = [1,2,3,4,5];
numeros.forEach(function(numero, index) {
    console.log(`${index} : ${numero}`);
});
console.log(numeros[0]);

let familia = ["padre","madre","abuela","abuelo","hermano"];
familia.forEach(function(f, index) {
    console.log(`${index} : ${f}`);
});
console.log(frutas[0]);

let textoAleatorio = console.log(frutas[1],numeros[3],familia[4]);