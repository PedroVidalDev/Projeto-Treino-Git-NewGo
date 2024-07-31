class Triangulo{
    private ladoA : number;
    private ladoB : number;
    private ladoC : number;

    constructor(ladoA : number, ladoB : number, ladoC : number){
        this.ladoA = ladoA;
        this.ladoB = ladoB;
        this.ladoC = ladoC;
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

    public calcularAreaTrianguloRetangulo() {
        let area : number = (this.calcularAltura() * this.ladoA) / 2;

        return area;
    }
    
}

export default Triangulo;