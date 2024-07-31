abstract class Triangulo{
    protected ladoA : number;
    protected ladoB : number;
    protected ladoC : number;

    protected anguloAB : number;
    protected anguloBC : number;
    protected anguloCA : number;

    constructor(ladoA : number = null, ladoB : number = null, ladoC : number = null, anguloAB : number = null, anguloBC : number = null, anguloCA : number = null){
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
    
    public getAnguloAB() : number{
        return this.anguloAB;
    }

    public getAnguloBC() : number{
        return this.anguloBC;
    }

    public getAnguloCA(): number{
        return this.anguloCA;
    }

    public abstract calcularAltura() : number;
    public abstract calcularArea() : number;

    public calcularFormulaHerao() : number{
        let semi : number = (this.ladoA + this.ladoB + this.ladoC) / 2;

        return Math.sqrt(semi * (semi - this.ladoA) * (semi - this.ladoB) * (semi - this.ladoC));
    }

}

export default Triangulo;