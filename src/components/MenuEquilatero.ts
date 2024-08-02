import * as scanner from "readline-sync";
import TrianguloEquilatero from "../models/TrianguloEquilatero.js";
import TrianguloEquilateroService from "../services/TrianguloEquilateroService.js";

class MenuEquilatero{

    public static menuEquilatero() : void {
        let service : TrianguloEquilateroService = new TrianguloEquilateroService();

        let lado : number = Number(scanner.question("Digite os lados do seu triangulo equilatero: "));

        let triangulo : TrianguloEquilatero = service.verificarDadosTrianguloEquilatero(lado);

        console.log(`Area do Triangulo Equilatero: ${triangulo.calcularArea()}`);
        console.log(`Altura do Triangulo Equilatero: ${triangulo.calcularAltura()}`);
    }
}

export default MenuEquilatero;