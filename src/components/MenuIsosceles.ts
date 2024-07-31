import * as scanner from "readline-sync";

class MenuIsosceles{
    public static menuIsosceles() : void {
        let lado : number = Number(scanner.question("Digite os lados do seu triangulo isosceles: "));
        let base : number = Number(scanner.question("Digite a base do seu triangulo isosceles: "));
        let altura : number = Number(scanner.question("Digite a altura do seu triangulo isosceles: "));

    }
}

export default MenuIsosceles;