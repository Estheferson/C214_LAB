class Onibus extends Veiculo{
    assentos;

    constructor(placa, ano, assentos){
        super(placa,ano);
        this.assentos = assentos;
    }

    setAssentos(novoAssento){
        this.assentos = novoAssento; 
    }

    getAssentos(){
        console.log("Assento", this.assentos)
    }

    exibirdados(){
        console.log("Placa", this.placa);
        console.log("Ano", this.ano);
    }

}
const bus = new Onibus('b5g5275', 1997, 37);
bus.exibirdados();
bus.getAssentos();