class pessoa {
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }

    getName(){
        return this.nome
    }

    getIdade(){
        return this.idade
    }
}

const j = new Jogador("Estheferson", 22)
console.log(j.getName())
console.log(j.getIdade())