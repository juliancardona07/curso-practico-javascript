//FUNCIONES FLECHA///
//CUADRADO
const perimCuadrado = (lado) => lado * 4;
const areaCuadr = (lado) => lado * lado;
console.log(perimCuadrado(5));
console.log(areaCuadr(5));
//TRIANGULO
const perimTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
const areaTriang = (base, altura) => (base * altura) / 2;
console.log(perimTriangulo(5, 5, 6));
console.log(areaTriang(5, 4));
//TRIANGULO ISOSCELES
const alturaIsosceles = (lado1, lado2, base) => {
  if (lado1 == lado2 && lado1 != base) {
    return Math.sqrt(lado1 * lado1 - (base * base) / 4);
  } else {
    return "lados no coinciden";
    //alert("lados no coinciden");
  }
};

/* const alturaIsosceles = function (lado1, lado2, base) {
  if (lado1 == lado2) {
    const altura = Math.sqrt(lado1 * lado1 - (base * base) / 4);
    return altura;
  } else {
    console.log("lados no coinciden");
    //alert("lados no coinciden");
  }
}; */

console.log(alturaIsosceles(6, 6, 8));

//CIRCULO
let PI = Math.PI;
const diamCirculo = (radio) => radio * 2;
const perimCirculo = (radio) => diamCirculo(radio) * PI;
const areaCirc = (radio) => radio * radio * PI;
console.log(diamCirculo(5));
console.log(perimCirculo(4));
console.log(areaCirc(5));

//INTERCTUAR CON EL HTML DEL FORMULARIO
//perimetro y area del cuadrado
function calcularPerimetroCuadrado() {
  const input = document.getElementById("input_cuadrado");
  const value = input.value;
  //document.getElementById().value;
  const perimetro = perimCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("input_cuadrado");
  const value = input.value;
  //document.getElementById().value;
  const area = areaCuadr(value);
  alert(area);
}

//PERIMETRO Y AREA DEL TRIANGULO
function calcularPerimetroTriangulo() {
  const input1 = document.getElementById("lado1_triangulo");
  const input2 = document.getElementById("lado2_triangulo");
  const input3 = document.getElementById("lado3_triangulo");
  const value1 = parseInt(input1.value);
  const value2 = parseInt(input2.value);
  const value3 = parseInt(input3.value);
  //document.getElementById().value;
  const perimetro = perimTriangulo(value1, value2, value3);
  alert(perimetro);
}

function calcularAreaTriangulo() {
  const input = document.getElementById("lado3_triangulo");
  const input2 = document.getElementById("altura_triangulo");
  const value = parseInt(input.value);
  const value2 = parseInt(input2.value);
  //document.getElementById().value;
  const area = areaTriang(value, value2);
  alert(area);
}

//ALTURA TRIANGULO ISOSCELES
function calcularAlturaTrianguloIsosceles() {
  const input1 = document.getElementById("lado1_triangulo_isosceles");
  const input2 = document.getElementById("lado2_triangulo_isosceles");
  const input3 = document.getElementById("base_triangulo_isosceles");
  const value1 = parseInt(input1.value);
  const value2 = parseInt(input2.value);
  const value3 = parseInt(input3.value);
  const altura = alturaIsosceles(value1, value2, value3);
  alert(altura);
}

//PERIMETRO Y AREA CIRCULO
//perimetro y area del triangulo
function calcularPerimetroCirculo() {
  const input = document.getElementById("input_circulo");
  const value = parseInt(input.value);
  const perimetro = perimCirculo(value);
  alert(perimetro);
}

function calcularAreaCirculo() {
  const input = document.getElementById("input_circulo");
  const value = parseInt(input.value);
  //document.getElementById().value;
  const area = areaCirc(value);
  alert(area);
}

/* 
////////////////CODIGO CUADRADO///////////////
//creacion de variables
const valorPerimetroCuadrado;
const valorAreaCuadrado;
console.group("CUADRADO");

//creando el area
//funcion del perimetro
function perimetroCuadrado(lado) {
  
  valorPerimetroCuadrado = lado * 4;
  console.log(`los lados del cuadrado miden: ${lado} cm`);
  console.log(`el perimetro del cuadrado mide ${valorPerimetroCuadrado} cm`);
  return valorPerimetroCuadrado;
}

function areaCuadrado(lado){
  valorAreaCuadrado=lado*lado;
  console.log(`el area del cuadrado mide: ${valorAreaCuadrado} cm2`);
  return valorAreaCuadrado;
}

perimetroCuadrado(6);
areaCuadrado(6);

console.groupEnd();
////////////////CODIGO TRIANGULO///////////////
//creacion de variables
console.group("TRIANGULO");
//const alturaTriangulo = 5.5;
const valorPerimetroTriangulo;
const valorAlturaTriangulo;
//imprimiendo la altura
console.log(`la altura del triangulo es ${alturaTriangulo} cm`);

//funcion del perimetro el perimetro

function perimetroTriangulo(lado1, lado2, base) {
  valorPerimetroTriangulo= lado1 + lado2 + base;
  console.log(
  `los lados del triangulo miden: ${lado1} cm, 
  ${lado2} cm, ${base} cm `
);
  console.log(`el perimetro del triangulo mide: ${valorPerimetroTriangulo} cm`);
  return valorPerimetroTriangulo;
}

//creando el area
function areaTriangulo(base,altura){
  valorAlturaTriangulo=(base*altura) /2;
  console.log(`el area del triangulo mide: ${valorAlturaTriangulo} cm2`);  
  return valorAlturaTriangulo;
}
console.groupEnd();

perimetroTriangulo (5,5,6);
areaTriangulo(5,2);

////////////////CODIGO CIRCULO
console.group("CIRCULO");
//creacion variables
//const radioCirculo = 4;
let valorDiametroCirculo;
let PI = Math.PI;
//const perimetroCirculo = diametroCirculo * PI;
let valorPerimetroCirculo;
let valorAreaCirculo;
//const areaCirculo = radioCirculo * radioCirculo * PI;

function diametroCirculo(radio){
valorDiametroCirculo=radio *2;
console.log(`el diametro del circulo es ${valorDiametroCirculo} cm`);
return valorDiametroCirculo;
}
//diametroCirculo(4);

//const PI = Math.PI;
function perimetroCirculo (radio){
const diametro=diametroCirculo(radio);
valorPerimetroCirculo=diametro*PI; 
console.log(`el perimetro del circulo es ${valorPerimetroCirculo} cm`);
return valorPerimetroCirculo;
}
//perimetroCirculo(5);

function areaCirculo(radio){
valorAreaCirculo=(radio*radio) * PI;
console.log(`el area del circulo es ${valorAreaCirculo} cm2`);
return valorAreaCirculo;
}
//areaCirculo(4);

//diametroCirculo(4);
perimetroCirculo(5);
areaCirculo(5);

console.groupEnd();
 */
