class TrianguloRetanguloService{
    public verificar(ladoA : number = null, ladoB : number = null, ladoC : number = null, anguloAB : number = null, anguloBC : number = null, anguloCA : number = null) : void{
        if(ladoA <= 0 || ladoB <= 0 || ladoC <= 0){
            throw new Error("Lado deve ser maior que zero.");
        }

        else if(anguloAB != null && anguloBC != null && anguloCA != null){
            if(anguloAB + anguloBC + anguloCA != 180){
                throw new Error("Soma dos angulos internos deve ser 180.")
            }
        }

        let pitagoras : boolean = ((ladoB**2) == ((ladoA**2) + (ladoC**2)))
        if(!pitagoras){
            throw new Error("Quadrado da hipotenusa deve ser igual a soma dos catetos.");
        }

        
    }
}

export default TrianguloRetanguloService;