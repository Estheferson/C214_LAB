const Constants = require('../src/utils/constants');
const Validation = require('../src/utils/validation');

it('Caso válido', () => {
    const result = Validation.create({
        nome: "City",
        tipo: "Automatico",
        fabricante: "Honda",
        ano: 2020
    });
    expect(result).toEqual(undefined);
});

it('Caso inválido - sem o parâmetro nome', () => {
    const result = Validation.create({
        tipo: "Manual",
        fabricante: "Mercedes",
        ano: 2017
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});
