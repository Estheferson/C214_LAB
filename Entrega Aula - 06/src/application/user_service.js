const validate = require('validate.js');

const Utils = require('../utils/utils');
const Constants = require('../utils/constants');
const UserRepository = require('../port/user_repository');
const Constraints = require('../utils/user_validation');
const Validation = require('../utils/validation');

const User = {
    async create(data) {
        try {
            const validation = Validation.create(data);
            if (validation) {
                return validation;
            }

            data.id = Utils.generateUuid();

            const response = await UserRepository.create(data);

            if (response.code === 11000) {
                const result = Constants.ErrorDuplicate;
                return result;
            }
            return response;
        } catch (error) {
            return error;
        }
    },  
    async list() {
        try {
            const response = await UserRepository.list();

            return response;
        } catch (error) {
            return error;
        }
    },
};
module.exports = User;
