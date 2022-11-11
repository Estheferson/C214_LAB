const Pessoa = (name, idade) => ({
    name,
    idade,
    getData: () => ({name, idade})
})

const pessoa = Pessoa ('Estheferson', 22)
console.log(pessoa.getData())
