import Consulta from "../models/consulta_schema.js";
import Animal from "../models/animal_schema.js";
import Veterinario from "../models/vet_schema.js";

export const listarConsulta = async (req, res) => {
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
        const { dataConsulta, motivo, observacoes, idAnimal, idVeterinario } = req.body;

        if (!dataConsulta || !motivo || !idAnimal || !idVeterinario) {
            return res.status(400).json({ error: 'Todos os campos obrigatórios devem ser preenchidos.' });
        }

        const animalExiste = await Animal.findById(idAnimal);
        const vetExiste = await Veterinario.findById(idVeterinario);

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

export const buscarConsulta = async (req, res) => {
    try {
        const { id } = req.params;
        const consulta = await Consulta.findById(id)
            .populate('animal')
            .populate('veterinario');

        if (!consulta) {
            return res.status(404).json({ error: 'Consulta não encontrada.' });
        }

        return res.json(consulta);
    } catch (error) {
        return res.status(500).json({ error: 'Erro no sistema ao buscar consulta.' });
    }
}