import Triangulo from "./Triangulo.js";

class TrianguloIsosceles extends Triangulo{
    private altura : number;

    constructor(base : number, lado : number, altura : number){
        super(base, lado, lado);
        this.altura = altura;
    }

    public getAltura() : number {
        return this.altura;
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