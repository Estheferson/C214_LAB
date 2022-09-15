const User = require('../application/user_service');
const Utils = require('../utils/utils');

const route = '/user';

module.exports = (app) => {
    app.post(`${route}/create`, async (req, res) => {
        const response = await User.create(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
    app.get(`${route}/list`, async (req, res) => {
        const response = await User.list();
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
};
