import TrianguloRetangulo from "../models/TrianguloRetangulo.js";

class TrianguloRetanguloService{
    public verificar(ladoA : number = null, ladoB : number = null, ladoC : number = null) : TrianguloRetangulo{
        if(ladoA <= 0 || ladoB <= 0 || ladoC <= 0){
            throw new Error("Lado deve ser maior que zero.");
        }

        let pitagoras : boolean = ((ladoB**2) == ((ladoA**2) + (ladoC**2)))
        if(!pitagoras){
            throw new Error("Quadrado da hipotenusa deve ser igual a soma dos catetos.");
        }

        let retangulo : TrianguloRetangulo = new TrianguloRetangulo(ladoA, ladoB, ladoC);
        return retangulo;
        
    }
}

export default TrianguloRetanguloService;