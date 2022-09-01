class Caminhao extends Veiculo{
    eixos;

    constructor(placa, ano, eixos){
        super(placa,ano);
        this.eixos = eixos;
    }

    setEixos(novoEixos){
        this.eixos = novoEixos; 
    }

    getEixos(){
        console.log("Eixos", this.eixos)
    }

    exibirdados(){
        console.log("Placa", this.placa);
        console.log("Ano", this.ano);
    }
}
const mercedes = new Caminhao('b5g5214', 1998, 'x');
mercedes.exibirdados();
mercedes.getEixos();