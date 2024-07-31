import Triangulo from "./Triangulo.js";

class TrianguloIsosceles extends Triangulo{
    constructor(base : number, lado : number){
        super(base, lado, lado);
    }

    public calcularAltura(): number {
        let altura : number = Math.sqrt((this.ladoB**2) - ((this.ladoA / 2)**2))
        return altura;
    }

    public calcularArea() : number {
        let area : number = (this.calcularAltura() * this.ladoA) / 2;
        return area;
    }
}

export default TrianguloIsosceles;