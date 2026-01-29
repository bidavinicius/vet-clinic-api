import Consulta from "../models/consulta_schema.js";
import Animal from "../models/animal_schema.js";
import Veterinario from "../models/vet_schema.js";

export const listarConsultas = async (req, res) => {
    try {
        const consultas = await Consulta.find()
            .populate('animal')
            .populate('veterinario');
        return res.status(200).json(consultas);
    } catch (error) {
        return res.status(500).json({ error: 'Erro no sistema ao listar consultas.' });
    }
};

export const cadastrarConsulta = async (req, res) => {
    try {
        const { dataConsulta, motivo, observacoes, animalId, veterinarioId } = req.body;

        if (!dataConsulta || !motivo || !animalId || !veterinarioId) {
            return res.status(400).json({ error: 'Todos os campos obrigatórios devem ser preenchidos.' });
        }

        const animalExiste = await Animal.findById(animalId);
        const vetExiste = await Veterinario.findById(veterinarioId);

        if (!animalExiste) {
            return res.status(404).json({ error: 'Animal não encontrado.' });
        }
        
        if (!vetExiste) {
            return res.status(404).json({ error: 'Veterinário não encontrado.' });
        }

        const novaConsulta = new Consulta({
            dataConsulta,
            motivo,
            observacoes,
            animal: animalExiste,
            veterinario: vetExiste
        });

        await novaConsulta.save();
        return res.status(201).json(novaConsulta);
    } catch (error) {
        return res.status(500).json({ error: 'Erro no sistema ao cadastrar consulta.' });
    }
};
