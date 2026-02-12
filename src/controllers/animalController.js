import db from '../database/db.js';

export const listarAnimal = async (req, res) => {
    try {
        return res.json(db.animais);
    } catch (error) {
        return res.status(500).json({ error: 'Erro no sistema ao listar animais.' });
    }
};

export const cadastrarAnimal = async (req, res) => {
    try {
        const { nome, especie, raca, cor, dataNascimento } = req.body;

        if (!nome || !especie || !raca || !cor || !dataNascimento) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
        }

        const novoAnimal = {
            id: db.idAnimal,
            nome,
            especie,
            raca,
            cor,
            dataNascimento
        };

        db.animais.push(novoAnimal);
        db.idAnimal++;
        return res.status(201).json(novoAnimal);
    } catch (error) {
        return res.status(500).json({ error: 'Erro no sistema ao criar animal.' });
    }
};


export const buscarAnimalPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const animal = db.animais.find(animalID => animalID.id === parseInt(id));

        if (!animal) {
            return res.status(404).json({ error: 'Animal não encontrado.' });
        }

        return res.json(animal);
    } catch (error) {
        return res.status(500).json({ error: 'Erro no sistema ao buscar animal.' });
    }
};

export const buscarAnimalPorNome = async (req, res) => {
    try {
        const { nome } = req.params;
        const animaisEncontrados = db.animais.filter(animal => animal.nome.toLowerCase() === nome.toLowerCase());

        if (animaisEncontrados.length === 0) {
            return res.status(404).json({ error: 'Nenhum animal encontrado com esse nome.' });
        }

        return res.json(animaisEncontrados);
    } catch (error) {
        return res.status(500).json({ error: 'Erro no sistema ao buscar animais.' });
    }
};

export const atualizarAnimal = async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, especie, raca, cor, dataNascimento } = req.body;

        const animalIndex = db.animais.findIndex(animalID => animalID.id === parseInt(id));

        if (animalIndex === -1) {
            return res.status(404).json({ error: 'Animal não encontrado.' });
        }

        const animalAtualizado = {
            ...db.animais[animalIndex],
            nome: nome,
            especie: especie,
            raca: raca,
            cor: cor,
            dataNascimento: dataNascimento
        };

        db.animais[animalIndex] = animalAtualizado;
        return res.json(animalAtualizado);
        
    } catch (error) {
        return res.status(500).json({ error: 'Erro no sistema ao atualizar animal.' });
    }
}

export const deletarAnimal = async (req, res) => {
    try {
        const { id } = req.params;
        const animalIndex = db.animais.findIndex(animalID => animalID.id === parseInt(id));

        if (animalIndex === -1) {
            return res.status(404).json({ error: 'Animal não encontrado.' });
        }

        db.animais.splice(animalIndex, 1);
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ error: 'Erro no sistema ao deletar animal.' });
    }
}
