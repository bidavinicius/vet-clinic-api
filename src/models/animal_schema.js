import mongoose from 'mongoose';

const animalSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    especie: { type: String, required: true },
    raca: { type: String, required: true },
    cor: { type: String, required: true },
    dataNascimento: { type: Date }, 
});

export default mongoose.model('Animal', animalSchema);