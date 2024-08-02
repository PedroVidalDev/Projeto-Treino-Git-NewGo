import * as scanner from "readline-sync";
import TrianguloRetanguloService from "../services/TrianguloRetangulo.js";
import TrianguloRetangulo from "../models/TrianguloRetangulo.js";

class MenuRetangulo{
    public static menuRetangulo() : void {
        let service : TrianguloRetanguloService = new TrianguloRetanguloService();

        let ladoA : number = Number(scanner.question("Digite o lado A (cateto) do seu triangulo retangulo: "));
        let ladoB : number = Number(scanner.question("Digite o lado B (hipotenusa) do seu triangulo retangulo: "));
        let ladoC : number = Number(scanner.question("Digite o lado C (cateto) do seu triangulo retangulo: "));

        let triangulo : TrianguloRetangulo = new TrianguloRetangulo(ladoA, ladoB, ladoC);
        console.log(`Area do Triangulo Retangulo: ${triangulo.calcularArea()}`);
        console.log(`Altura do Triangulo Retangulo: ${triangulo.calcularAltura()}`);
    }
}

export default MenuRetangulo;