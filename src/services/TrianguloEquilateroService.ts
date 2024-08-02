import TrianguloEquilatero from "../models/TrianguloEquilatero.js";

class TrianguloEquilateroService{
    public verificarDadosTrianguloEquilatero(lado : number = null) : TrianguloEquilatero{
        if(lado <= 0){
            throw new Error("Lado deve ser maior que 0.");
        } 

        let equilatero : TrianguloEquilatero = new TrianguloEquilatero(lado);
        return equilatero;
    }
}

export default TrianguloEquilateroService;