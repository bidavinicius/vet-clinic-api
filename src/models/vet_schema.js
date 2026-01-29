import mongoose from "mongoose";

const vetSchema = new mongoose.Schema({
    nome: { type: String, required: true },
});

export default mongoose.model("Veterinario", vetSchema);
