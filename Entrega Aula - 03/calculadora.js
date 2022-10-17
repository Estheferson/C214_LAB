const validate = require('validate.js');
const CalculadoraConstraint = require('./validate');

const Calculadora = {
    soma(N1,N2) {
        const validateN1 = validate({ N1 },  CalculadoraConstraint.calculadoraConstraint);
        const validateN2 = validate({ N2 }, CalculadoraConstraint.calculadoraConstraint);        
        if(validateN1 !== undefined || validateN2 !==  undefined){
            return 'Error';
        }
        let s = N1 + N2;
        return s;
    },

    subtracao(N1,N2) {
        const validateN1 = validate({ N1 },  CalculadoraConstraint.calculadoraConstraint);
        const validateN2 = validate({ N2 }, CalculadoraConstraint.calculadoraConstraint);  
        if(validateN1 !== undefined || validateN2 !==  undefined){
            return 'Error';
        }
        let sub = N1 - N2;
        return sub;
    },

    multiplicacao(N1,N2) {
        const validateN1 = validate({ N1 },  CalculadoraConstraint.calculadoraConstraint);
        const validateN2 = validate({ N2 }, CalculadoraConstraint.calculadoraConstraint);  
        if(validateN1 !== undefined || validateN2 !==  undefined){
            return 'Error';
        }
        let m = N1 * N2;
        return m;
    },

    divisao(N1,N2) {
        const validateN1 = validate({ N1 },  CalculadoraConstraint.calculadoraConstraint);
        const validateN2 = validate({ N2 }, CalculadoraConstraint.calculadoraConstraint);  
        if(validateN1 !== undefined || validateN2 !==  undefined){
            return 'Error';
        }
        let d = N1 / N2;
        return d;
    },

    quadrado(N1) {
        const validateN1 = validate({ N1 },  CalculadoraConstraint.calculadoraConstraint);  
        if(validateN1 !== undefined){
            return 'Error';
        }
        let q = N1**2;
        return q;
    },

};
module.exports = Calculadora;