class Triangulo{
    private ladoA : number;
    private ladoB : number;
    private ladoC : number;

    private anguloAB : number;
    private anguloBC : number;
    private anguloCA : number;

    constructor(ladoA : number, ladoB : number, ladoC : number, anguloAB : number, anguloBC : number, anguloCA : number){
        this.ladoA = ladoA;
        this.ladoB = ladoB;
        this.ladoC = ladoC;

        this.anguloAB = anguloAB;
        this.anguloBC = anguloBC;
        this.anguloCA = anguloCA;
    }

    public getLadoA() : number{
        return this.ladoA;
    }

    public getLadoB() : number{
        return this.ladoB;
    }

    public getLadoC(): number{
        return this.ladoC;
    }

    calcularAltura() : number{
        let altura: number = Math.sqrt((this.getLadoA() / 2)**2 + this.getLadoB()**2)

        return altura;
    }

    public calcularAreaTrianguloRetangulo() : number {
        let area : number = (this.calcularAltura() * this.ladoA) / 2;

        return area;
    }

    public calcularAreaTrianguloEquilatero() : number{
        let area = (this.getLadoA()**2 * Math.sqrt(3)) / 4;

        return area;
    }
    
}

export default Triangulo;