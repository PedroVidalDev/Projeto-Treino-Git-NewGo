import * as scanner from "readline-sync";
import TrianguloIsoscelesService from "../services/TrianguloIsoscelesService.js";
import TrianguloIsosceles from "../models/TrianguloIsosceles";

class MenuIsosceles{
    public static menuIsosceles() : void {
        let service : TrianguloIsoscelesService = new TrianguloIsoscelesService();

        let lado : number = Number(scanner.question("Digite os lados do seu triangulo isosceles: "));
        let base : number = Number(scanner.question("Digite a base do seu triangulo isosceles: "));

        let triangulo : TrianguloIsosceles = new TrianguloIsosceles(base, lado);
        console.log(`Area do Triangulo Isosceles: ${triangulo.calcularArea()}`);
        console.log(`Altura do Triangulo Isosceles: ${triangulo.calcularAltura()}`);
    }
}

export default MenuIsosceles;