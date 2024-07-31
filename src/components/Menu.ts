import { exit } from "process";
import * as scanner from "readline-sync";
import MenuRetangulo from "./MenuRetangulo";
import MenuIsosceles from "./MenuIsosceles";
import MenuEquilatero from "./MenuEquilatero";

class Menu{
    public static mostrarMenu() : void {
        console.log("Seja bem-vindo ao sistema de calculo de triangulos! Qual triangulo gostaria de calcular? \n1) Retangulo \n2) Isosceles \n3) Equilatero \n4) Sair");
        let escolha : number = Number(scanner.question("Escolha: "));

        switch (escolha) {
            case 1:
                MenuRetangulo.menuRetangulo();
                break;
            case 2:
                MenuIsosceles.menuIsosceles();
                break;

            case 3:
                MenuEquilatero.menuEquilatero();
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