const { UserModel } = require('../infrastructure/database');

const UserRepository = {
    async create(data) {
        try {
            const model = new UserModel(data);
            const response = await model.save();
            return response.toObject();
        } catch (e) {
            return e;
        }
    },
    async list() {
        try {
            const result = await UserModel.find().exec();
            return result;
        } catch (error) {
            return error;
        }
    },

    async getByNome(data) {
        try {
            const result = await UserModel.findOne({ nome: data.nome }).exec();
            return result;
        } catch (e) {
            return e;
        }
    },
};

module.exports = UserRepository;