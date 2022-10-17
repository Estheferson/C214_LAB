const { UserModel } = require('../infrastructure/database');

const CarRepository = {
    async create(data) {
        try {
            const model = new CarModel(data);
            const response = await model.save();
            return response.toObject();
        } catch (e) {
            return e;
        }
    },

    async update(data) {
        try {
            const update = {
                ano: data.ano,
            };
            const options = { new: true };
            const filter = { nome: data.nome };
            const result = await UserModel.findOneAndUpdate(filter, update, options).exec();
            if (result === null) return []
            return result.toObject();
        } catch (e) {
            return e;
        }
    },

    async list() {
        try {
            const result = await CarModel.find().exec();
            return result;
        } catch (error) {
            return error;
        }
    },

    async getByMarca(data) {
        try {
            const result = await CarModel.findOne({ fabricante: data.fabricante }).exec();
            return result;
        } catch (e) {
            return e;
        }
    },

    async delete(data) {
        try {
            const result = await CarModel.deleteOne({ nome: data.nome }).exec();
            return result.deletedCount;
        } catch (error) {
            return error;
        }
    },
};
module.exports = CarRepository;