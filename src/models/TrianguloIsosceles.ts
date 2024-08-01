import Triangulo from "./Triangulo.js";

class TrianguloIsosceles extends Triangulo{
    private altura : number;

    constructor(base : number, lado : number, altura : number = null){
        super(base, lado, lado);
        this.altura = altura;
    }

    public getAltura() : number {
        return this.altura;
    }

    public calcularAltura(): number {
        this.altura = Math.sqrt((this.ladoB**2) - ((this.ladoA / 2)**2))
        return this.altura;
    }

    public calcularArea() : number {
        let area : number = (this.calcularAltura() * this.ladoA) / 2;
        return area;
    }
}

export default TrianguloIsosceles;