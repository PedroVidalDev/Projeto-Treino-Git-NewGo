import Triangulo from "./Triangulo.js";

class TrianguloRetangulo extends Triangulo{
    constructor(ladoA : number = null, ladoB : number = null, ladoC : number = null){
        super(ladoA, ladoB, ladoC);
    }

    public calcularAltura() : number {
        return this.ladoC;
    }

    public calcularArea() : number {
        let area : number = (this.ladoC * this.ladoA) / 2;

        return area;
    }
}

export default TrianguloRetangulo;