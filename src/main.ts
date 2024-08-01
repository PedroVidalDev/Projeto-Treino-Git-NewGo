import Triangulo from "./models/Triangulo.js";
import TrianguloEquilatero from "./models/TrianguloEquilatero.js";
import TrianguloIsosceles from "./models/TrianguloIsosceles.js";
import TrianguloRetangulo from "./models/TrianguloRetangulo.js";

let trianguloIsosceles : Triangulo = new TrianguloIsosceles(10, 6);
console.log(trianguloIsosceles.calcularAltura());
console.log(trianguloIsosceles.calcularArea());

let trianguloEquilatero : Triangulo = new TrianguloEquilatero(10);
console.log(trianguloEquilatero.calcularAltura());
console.log(trianguloEquilatero.calcularArea());

let trianguloRetangulo : Triangulo = new TrianguloRetangulo(4,5,3);
console.log(trianguloRetangulo.calcularAltura());
console.log(trianguloRetangulo.calcularArea());