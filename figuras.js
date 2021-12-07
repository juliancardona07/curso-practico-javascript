////////////////CODIGO CUADRADO///////////////
//creacion de variables
console.group("CUADRADO");
const ladoCuadrado = 5;
//imprimir texto
console.log(`los lados del cuadrado miden: ${ladoCuadrado} cm`);
//creando el perimetro
const perimetroCuadrado = ladoCuadrado * 4;
//imprmiendo el perimetro
console.log(`el perimetro del cuadrado mide: ${perimetroCuadrado} cm`);
//creando el area
const areaCuadrado = ladoCuadrado * ladoCuadrado;
//imprmiendo el area
console.log(`el area del cuadrado mide: ${areaCuadrado} cm2`);
console.groupEnd();

////////////////CODIGO TRIANGULO///////////////
//creacion de variables
console.group("TRIANGULO");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
//imprimir texto
console.log(
  `los lados del triangulo miden: ${ladoTriangulo1} cm, 
  ${ladoTriangulo2} cm, ${baseTriangulo} cm `
);
//imprimiendo la altura
console.log(`la altura del triangulo es ${alturaTriangulo} cm`);

//creando el perimetro
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;

//imprmiendo el perimetro
console.log(`el perimetro del triangulo mide: ${perimetroTriangulo} cm`);
//creando el area
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
//imprmiendo el area
console.log(`el area del triangulo mide: ${areaTriangulo} cm2`);
console.groupEnd();

////////////////CODIGO CIRCULO
console.group("CIRCULO");
//creacion variables
const radioCirculo = 4;
const diametroCirculo = radioCirculo * 2;
const PI = Math.PI;
const perimetroCirculo = diametroCirculo * PI;
const areaCirculo = radioCirculo * radioCirculo * PI;

console.log(`el radio del circulo es ${radioCirculo} cm`);
console.log(`el diametro del circulo es ${diametroCirculo} cm`);
console.log(`el PI del circulo es ${PI} cm`);
console.log(`el perimetro del circulo es ${perimetroCirculo} cm`);
console.log(`el area del circulo es ${areaCirculo} cm2`);

console.groupEnd();
