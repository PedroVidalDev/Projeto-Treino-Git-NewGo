import Triangulo from "./Triangulo.js";

class TrianguloEquilatero extends Triangulo{
    constructor(lado : number){
        super(lado, lado, lado);
    }

    public calcularAltura(): number {
        let altura : number = (this.ladoA * Math.sqrt(3)) / 2;

        return altura;
    }

    public calcularArea() : number{
        let area = (this.ladoA**2 * Math.sqrt(3)) / 4;

        return area;
    }
}

export default TrianguloEquilatero;