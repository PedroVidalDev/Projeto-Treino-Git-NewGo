class Triangulo{
    private ladoA : Number;
    private ladoB : Number;
    private ladoC : Number;

    constructor(ladoA : Number, ladoB : Number, ladoC : Number){
        this.ladoA = ladoA;
        this.ladoB = ladoB;
        this.ladoC = ladoC;
    }

    getLadoA() : Number{
        return this.ladoA;
    }

    getLadoB() : Number{
        return this.ladoB;
    }

    getLadoC() : Number{
        return this.ladoC;
    }

    calcularArea() {

        return 0;
    }
}

export default Triangulo;