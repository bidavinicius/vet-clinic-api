import Animal from "../models/animal_schema.js";

export const listarAnimal = async (req, res) => {
    try {
        const animais = await Animal.find();
        return res.status(200).json(animais);
    } catch (error) {
        return res.status(500).json({ error: 'Erro no sistema ao listar animais.' });
    }
};

export const cadastrarAnimal = async (req, res) => {
    try {
        const { nome, especie, raca, cor,  } = req.body;

        if (!nome || !especie || !raca || !cor || !dataNascimento) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
        }

        const novoAnimal = new Animal({
            nome,
            especie,
            raca,
            cor,
            dataNascimento
        });

        await novoAnimal.save();
        return res.status(201).json(novoAnimal);
    } catch (error) {
        return res.status(500).json({ error: 'Erro no sistema ao cadastrar animal.' });
    }
};          

export const buscarAnimalPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const animal = await Animal.findById(id);

        if (!animal) {
            return res.status(404).json({ error: 'Animal não encontrado.' });
        }

        return res.json(animal);
    } catch (error) {
        return res.status(500).json({ error: 'Erro no sistema ao buscar animal.' });
    }
};

//Como não foi especificado a maneira de mostrar os detalhes dos animais, fiz a opção convencional por ID, logo acima, mas também fiz por nome, já que numa clínica veterinária pode ser difícil lembrar o ID de cada animal. 
//Além disso, teria como fazer uma única função que buscasse tanto por ID quanto por nome, simplesmente trocando o parâmetro. Achei interessante deixar as duas opções separadas, já que acredito que a função de busca por ID funciona de uma maneira mais direta e eficiente, então quis deixar exposto o código para ambas as situações.

export const buscarAnimalPorNome = async (req, res) => {
    try {
        const { nome } = req.params;
        const animal = await Animal.findOne({ nome: nome });

        if (!animal) {
            return res.status(404).json({ error: 'Animal não encontrado.' });
        }

        return res.json(animal);
    } catch (error) {
        return res.status(500).json({ error: 'Erro no sistema ao buscar animal.' });
    }
};

export const atualizarAnimal = async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, especie, raca, cor, dataNascimento } = req.body;

        const animalAtualizado = await Animal.findByIdAndUpdate(
            id,
            { nome, especie, raca, cor, dataNascimento },
            { new: true }
        );

        if (!animalAtualizado) {
            return res.status(404).json({ error: 'Animal não encontrado.' });
        }

        return res.json(animalAtualizado);
    } catch (error) {
        return res.status(500).json({ error: 'Erro no sistema ao atualizar animal.' });
    }
};

export const deletarAnimal = async (req, res) => {
    try {
        const { id } = req.params;

        const animalDeletado = await Animal.findByIdAndDelete(id);

        if (!animalDeletado) {
            return res.status(404).json({ error: 'Animal não encontrado.' });
        }

        return res.json({ message: 'Animal deletado com sucesso.' });
    } catch (error) {
        return res.status(500).json({ error: 'Erro no sistema ao deletar animal.' });
    }
}
