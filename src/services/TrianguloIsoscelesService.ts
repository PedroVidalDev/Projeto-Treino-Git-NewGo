class TrianguloIsoscelesService{
    public verificar(lado : number = null, base : number = null, altura: number = null) : void{
        if(lado <= 0 || base <= 0){
            throw new Error("Lado deve ser maior que zero.");
        }

        if(lado < base/2){
            throw new Error("O lado de um triângulo isósceles deve ser maior do que a metade de sua base.");
        } 
    }
}