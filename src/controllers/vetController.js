import db from "../database/db.js";

export const listarVet = async (req, res) => {
  try {
    return res.json(db.veterinarios);
  } catch (error) {
    return res.status(500).json({ error: "Erro no sistema ao listar veterinários." });
  }
};

export const cadastrarVet = async (req, res) => {
  try {
    const { nome } = req.body;

    if (!nome) {
      return res
        .status(400)
        .json({ error: "Nome do veterinário é obrigatório." });
    }
    const newVet = {
      id: db.idVet,
      nome,
    };

    db.veterinarios.push(newVet);
    db.idVet++;
    return res.status(201).json(newVet);
  } catch (error) {
    return res.status(500).json({ error: "Erro no sistema ao criar veterinário." });
  }
};
