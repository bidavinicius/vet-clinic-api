import db from "../database/db.js";

export const listarConsulta = async (req, res) => {
    try {
        return res.json(db.consultas);
    } catch (error) {
        return res.status(500).json({ error: "Erro no sistema ao listar consultas." });
    }
}

export const cadastrarConsulta = async (req, res) => {
    try {
        const { dataConsulta, idAnimal, idVeterinario, motivo, observacoes } = req.body;

        if (!dataConsulta || !idAnimal || !idVeterinario || !motivo) {
            return res.status(400).json({ error: "Todos os campos são obrigatórios." });
        }

        const animalExiste = db.animais.find(animal => animal.id == idAnimal);
        const vetExiste = db.veterinarios.find(vet => vet.id == idVeterinario);

        if (!animalExiste || !vetExiste) {
            return res.status(400).json({ erro: 'Animal ou Veterinário inválido' });
        }

        const novaConsulta = {
            id: db.idConsulta,
            dataConsulta,
            animal: animalExiste,
            vet: vetExiste,
            motivo,
            observacoes
        };

        db.consultas.push(novaConsulta);
        db.idConsulta++;
        return res.status(201).json(novaConsulta);
    } catch (error) {
        return res.status(500).json({ error: "Erro no sistema ao criar consulta." });
    }
}

export const buscarConsulta = async (req, res) => {
    try {
        const {dataConsulta, animal, vet, motivo } = req.query;

        let consultasFiltradas = db.consultas;

        if (dataConsulta) {
            consultasFiltradas = consultasFiltradas.filter(consulta => consulta.dataConsulta === dataConsulta);
        }
        if (animal) {
            consultasFiltradas = consultasFiltradas.filter(consulta => consulta.animal.nome.toLowerCase().includes(animal.toLowerCase()));
        }
        if (vet) {
            consultasFiltradas = consultasFiltradas.filter(consulta => consulta.vet.nome.toLowerCase().includes(vet.toLowerCase()));
        }
        if (motivo) {
            consultasFiltradas = consultasFiltradas.filter(consulta => consulta.motivo.toLowerCase().includes(motivo.toLowerCase()));
        }

        return res.json(consultasFiltradas);
    } catch (error) {
        return res.status(500).json({ error: "Erro no sistema ao buscar consultas." });
    }
};
