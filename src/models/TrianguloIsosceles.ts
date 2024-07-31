import Triangulo from "./Triangulo.js";

class TrianguloEquilatero extends Triangulo{
    constructor(lado : number, base : number){
        super(lado, lado, base);
    }

    public calcularAltura(): number {
        let altura : number = Math.sqrt((this.getLadoA() / 2)**2 + this.getLadoB()**2)

        return altura;
    }

    public calcularArea() : number {
        let area : number = (this.calcularAltura() * this.ladoA) / 2;

        return area;
    }
}

export default TrianguloEquilatero;