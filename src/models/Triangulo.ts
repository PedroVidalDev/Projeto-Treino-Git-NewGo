abstract class Triangulo{
    protected ladoA : number;
    protected ladoB : number;
    protected ladoC : number;

    constructor(ladoA : number = null, ladoB : number = null, ladoC : number = null){
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

    public abstract calcularAltura() : number;
    public abstract calcularArea() : number;

    public calcularFormulaHerao() : number{
        let semi : number = (this.ladoA + this.ladoB + this.ladoC) / 2;

        return Math.sqrt(semi * (semi - this.ladoA) * (semi - this.ladoB) * (semi - this.ladoC));
    }

}

export default Triangulo;