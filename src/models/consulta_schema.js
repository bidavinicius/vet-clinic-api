import mongoose from 'mongoose';

const consultaSchema = new mongoose.Schema({
    dataConsulta: { type: String, required: true },
    motivo: { type: String, required: true },
    observacoes: { type: String },
    animal: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Animal', 
        required: true 
    },
    veterinario: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Veterinario', 
        required: true 
    }
});

export default mongoose.model('Consulta', consultaSchema);