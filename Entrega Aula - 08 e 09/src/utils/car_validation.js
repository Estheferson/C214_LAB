const create = {
    nome: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    fabricante: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    tipo: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    ano: {
        presence: {
            allowEmpty: false,
        },
        type: 'int',
    },
};

const get = {
    nome: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const update = {
    nome: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    ano: {
        presence: {
            allowEmpty: false,
        },
        type: 'int',
    },
};

const deleteBy = {
    nome: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

module.exports = {
    create,
    get,
    update,
    deleteBy,
};