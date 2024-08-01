import Triangulo from "./models/Triangulo.js";
import TrianguloEquilatero from "./models/TrianguloEquilatero.js";
import TrianguloIsosceles from "./models/TrianguloIsosceles.js";
import TrianguloRetangulo from "./models/TrianguloRetangulo.js";

console.log("///// TESTE DOS MODELS //////////")
console.log("ISOSCELES")
let trianguloIsosceles : Triangulo = new TrianguloIsosceles(10, 6);
console.log(`Altura: ${trianguloIsosceles.calcularAltura()}`);
console.log(`Area: ${trianguloIsosceles.calcularArea()}`);

console.log("\nEQUILATERO")
let trianguloEquilatero : Triangulo = new TrianguloEquilatero(10);
console.log(`Altura: ${trianguloEquilatero.calcularAltura()}`);
console.log(`Area: ${trianguloEquilatero.calcularArea()}`);

console.log("\nRETANGULO")
let trianguloRetangulo : Triangulo = new TrianguloRetangulo(4,5,3);
console.log(`Altura: ${trianguloRetangulo.calcularAltura()}`);
console.log(`Area: ${trianguloRetangulo.calcularArea()}`);

import TrianguloEquilateroService from "./services/TrianguloEquilateroService.js";
import TrianguloIsoscelesService from "./services/TrianguloIsoscelesService.js";
import TrianguloRetanguloService from "./services/TrianguloRetangulo.js";

console.log("\n///// TESTE DAS SERVICES EM CONJUNTO COM OS MODELS //////////")
console.log("SERVICE EQUILATERO")
let serviceEquilatero : TrianguloEquilateroService = new TrianguloEquilateroService();
let equilatero : TrianguloEquilatero = serviceEquilatero.verificar(10);
console.log(equilatero);
console.log(`Area: ${equilatero.calcularArea()}`);

console.log("\nSERVICE ISOSCELES")
let serviceIsosceles : TrianguloIsoscelesService = new TrianguloIsoscelesService();
let isosceles : TrianguloIsosceles = serviceIsosceles.verificar(10,7);
console.log(isosceles);
console.log(`Area: ${isosceles.calcularArea()}`);

console.log("\nSERVICE RETANGULO")
let serviceRetangulo : TrianguloRetanguloService = new TrianguloRetanguloService();
let retangulo : TrianguloRetangulo = serviceRetangulo.verificar(4,5,3);
console.log(retangulo);
console.log(`Area: ${retangulo.calcularArea()}`);