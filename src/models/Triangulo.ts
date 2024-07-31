class Triangulo{
    private ladoA : number;
    private ladoB : number;
    private ladoC : number;

    private anguloAB : number;
    private anguloBC : number;
    private anguloCA : number;

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

    calcularAltura() : number{
        let altura: number = Math.sqrt((this.getLadoA() / 2)**2 + this.getLadoB()**2)

        return altura;
    }

    public calcularAreaTrianguloRetangulo() : number {
        let area : number = (this.ladoB * this.ladoA) / 2;

        return area;
    }

    public calcularAreaTrianguloIsosceles() : number {
        let area : number = (this.calcularAltura() * this.ladoA) / 2;

        return area;
    }

    public calcularAreaTrianguloEquilatero() : number{
        let area : number = (this.getLadoA()**2 * Math.sqrt(3)) / 4;

        return area;
    }

    public calcularAreaTrianguloSemUmLadoEUmAngulo() : number {

        if(this.ladoA != null && this.ladoB != null && this.ladoC == null){
            let seno : number = Math.sin(this.anguloAB * (Math.PI / 180));

            return (this.ladoA * this.ladoB * seno) / 2;
        }

        else if(this.ladoB != null && this.ladoC != null && this.ladoA == null){
            let seno : number = Math.sin(this.anguloBC * (Math.PI / 180));

            return (this.ladoB * this.ladoC * seno) / 2;
        }

        else if(this.ladoC != null && this.ladoA != null && this.ladoB == null){
            let seno : number = Math.sin(this.anguloCA * (Math.PI / 180));

            return (this.ladoC * this.ladoA * seno) / 2;
        }
    }

    public calcularFormulaHerao() : number{
        let semi : number = (this.ladoA + this.ladoB + this.ladoC) / 2;

        return Math.sqrt(semi * (semi - this.ladoA) * (semi - this.ladoB) * (semi - this.ladoC));
    }
    
}

export default Triangulo;