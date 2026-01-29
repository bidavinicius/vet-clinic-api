import Veterinario from "../models/vet_schema.js";

export const listarVet = async (req, res) => {
  try {
    const vets = await Veterinario.find();
    return res.status(200).json(vets);
  } catch (error) {
    return res.status(500).json({ error: "Erro no sistema ao listar veterinários." });
  }
};

export const cadastrarVet = async (req, res) => {
  try {
    const { nome } = req.body;
    
    if (!nome) {
      return res.status(400).json({ error: "O nome é obrigatório." });
    }

    const novoVet = new Veterinario({ nome });
    await novoVet.save();
    return res.status(201).json(novoVet);

  } catch (error) {
    return res.status(500).json({ error: "Erro no sistema ao cadastrar veterinário." });
  }
};
