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

    public grausParaRadianos(angulo : number) : number{
        return angulo * (Math.PI / 180);
    }

    public calcularAltura() : number{
        let altura: number = Math.sqrt(this.ladoB**2 - (this.getLadoA() / 2)**2)

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
            let seno : number = Math.sin(this.grausParaRadianos(this.anguloAB));

            return (this.ladoA * this.ladoB * seno) / 2;
        }

        else if(this.ladoB != null && this.ladoC != null && this.ladoA == null){
            let seno : number = Math.sin(this.grausParaRadianos(this.anguloBC));

            return (this.ladoB * this.ladoC * seno) / 2;
        }

        else if(this.ladoC != null && this.ladoA != null && this.ladoB == null){
            let seno : number = Math.sin(this.grausParaRadianos(this.anguloCA));

            return (this.ladoC * this.ladoA * seno) / 2;
        }
    }

    public calcularFormulaHerao() : number{
        let semi : number = (this.ladoA + this.ladoB + this.ladoC) / 2;

        return Math.sqrt(semi * (semi - this.ladoA) * (semi - this.ladoB) * (semi - this.ladoC));
    }

    public calcularAreaTrianguloComUmLadoEUmAngulo() : number {
            if(this.ladoA != null){
                if(this.anguloAB != null){
                    this.ladoC = Math.tan(this.grausParaRadianos(this.anguloAB)) * this.ladoA;

                    return (this.ladoC * this.ladoA) / 2;
                }

                else if(this.anguloBC != null){
                    this.ladoC = this.ladoA / Math.tan(this.grausParaRadianos(this.anguloBC));

                    return (this.ladoC * this.ladoA) / 2;
                }
            }

            else if(this.ladoC != null){
                if(this.anguloAB != null){
                    this.ladoA = this.ladoC / Math.tan(this.grausParaRadianos(this.anguloAB));

                    return (this.ladoC * this.ladoA) / 2;
                }

                else if(this.anguloBC != null){
                    this.ladoA = this.ladoC * Math.tan(this.grausParaRadianos(this.anguloBC));

                    return (this.ladoA * this.ladoC) / 2;
                }
            }

            else if(this.ladoB != null){
                if(this.anguloAB != null){
                    this.ladoA = Math.cos(this.grausParaRadianos(this.anguloAB)) * this.ladoB;
                    this.ladoC = Math.sqrt(this.ladoB**2 - this.ladoA**2);

                    return (this.ladoA * this.ladoC) / 2;
                }

                else if(this.anguloBC != null){
                    this.ladoA = Math.sin(this.grausParaRadianos(this.anguloBC)) * this.ladoB;
                    this.ladoC = Math.sqrt(this.ladoB**2 - this.ladoA**2);

                    return (this.ladoA * this.ladoC) / 2;
                }
            }
    }
    
}

export default Triangulo;