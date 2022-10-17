const { interfaces } = require('mocha');
const mongoose = require('mongoose');
const uri = `mongodb+srv://root:root@clustercarro.qhbhklg.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const { Schema } = mongoose;

const CarSchema = new Schema({
    id: {
        type: String,
        index: true,
        unique: true,
    },
    nome: {
        type: String,
        unique: true,
    },
    tipo: String,
    fabricante: String,
    ano: int,
});

const CarModel = mongoose.model('CarModel', CarSchema);
module.exports = {
    CarModel,
};