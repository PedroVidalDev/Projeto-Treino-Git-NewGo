import { exit } from "process";
import * as scanner from "readline-sync";

class Menu{
    public static mostrarMenu() : void {
        console.log("Seja bem-vindo ao sistema de calculo de triangulos! Qual triangulo gostaria de calcular? \n1) Retangulo \n2) Isosceles \n3) Equilatero \n4) Sair");
        let escolha : number = Number(scanner.question("Escolha: "));

        switch (escolha) {
            case 1:
                
                break;
            case 2:

                break;

            case 3:

                break;

            case 4:
                exit();
                break;

            default:
                console.log("Formato de entrada invalido. Tente novamente.")
                break;
        }
    }
}

export default Menu;