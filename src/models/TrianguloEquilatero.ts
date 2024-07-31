import Triangulo from "./Triangulo.js";

class TrianguloEquilatero extends Triangulo{
    constructor(lado : number){
        super(lado, lado, lado);
    }

    public calcularAltura(): number {
        let altura : number = Math.sqrt((this.getLadoA() / 2)**2 + this.getLadoB()**2)

        return altura;
    }

    public calcularArea() : number{
        let area = (this.ladoA**2 * Math.sqrt(3)) / 4;

        return area;
    }
}

export default TrianguloEquilatero;