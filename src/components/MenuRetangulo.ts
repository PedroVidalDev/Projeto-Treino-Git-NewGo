import * as scanner from "readline-sync";

class MenuRetangulo{
    public static menuRetangulo() : void {
        let ladoA : number = Number(scanner.question("Digite o lado A do seu triangulo retangulo: "));
        let ladoB : number = Number(scanner.question("Digite o lado B do seu triangulo retangulo: "));
        let ladoC : number = Number(scanner.question("Digite o lado C do seu triangulo retangulo: "));

    }
}

export default MenuRetangulo;