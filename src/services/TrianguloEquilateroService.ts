class TrianguloEquilateroService{
    public verificar(lado : number = null) : void{
        if(lado <= 0){
            throw new Error("Lado deve ser maior que 0.");
        } 
        
    }
}