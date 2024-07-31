import Triangulo from "./Triangulo.js";

class TrianguloRetangulo extends Triangulo{
    constructor(ladoA : number = null, ladoB : number = null, ladoC : number = null, anguloAB : number = null, anguloBC : number = null, anguloCA : number = null){
        super(ladoA, ladoB, ladoC, anguloAB, anguloBC, anguloCA);
    }

    public calcularAltura() : number {
        return this.ladoB;
    }

    public calcularArea() : number {
        let area : number = (this.ladoB * this.ladoA) / 2;

        return area;
    }
}

export default TrianguloRetangulo;