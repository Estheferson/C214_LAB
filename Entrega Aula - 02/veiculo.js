class Veiculo{
    placa;
    ano;

    constructor(placa, ano){
        this.placa = placa;
        this.ano = ano;     
    }

    setPlaca(novaPlaca){
        this.placa = novaPlaca; 
    }

    setAno(novaAno){
        this.ano = novaAno; 
    }

    getPlaca(){
        console.log("Placa", this.placa)
    }

    getAno(){
        console.log("Ano", this.ano)
    }
    
    exibirdados(){
        console.log("Placa", this.placa);
        console.log("Ano", this.ano);
    }
} 

var veiculo = new Veiculo();
veiculo.setPlaca("b547gsa");
veiculo.setAno("1998");
veiculo.exibirdados();
veiculo.getAno();
veiculo.getPlaca();