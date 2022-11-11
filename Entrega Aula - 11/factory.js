const Pessoa = (nome, idade) => ({
    nome,
    idade,
    getData: () => ({nome, idade})
})

const pessoa = Pessoa ('Estheferson', 22)
console.log(pessoa.getData())
