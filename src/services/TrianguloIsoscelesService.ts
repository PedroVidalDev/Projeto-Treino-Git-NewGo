import TrianguloIsosceles from "../models/TrianguloIsosceles.js";

class TrianguloIsoscelesService{
    public verificarDadosTrianguloIsosceles(base : number = null, lado : number = null) : TrianguloIsosceles{
        if(lado <= 0 || base <= 0){
            throw new Error("Lado deve ser maior que zero.");
        }

        if(lado < base/2){
            throw new Error("O lado de um triângulo isósceles deve ser maior do que a metade de sua base.");
        } 

        let isosceles : TrianguloIsosceles = new TrianguloIsosceles(base, lado);
        return isosceles;
    }
}

export default TrianguloIsoscelesService;