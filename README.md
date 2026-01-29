# API para Clínica Veterinária

API RESTful desenvolvida em Node.js para o gerenciamento de uma clínica veterinária. O sistema permite o cadastro e administração de veterinários, pacientes (animais) e agendamento de consultas.

## IMPORTANTE

Para rodar, é necessário criar um arquivo .env na raiz do projeto, com a variável "MONGO_URI" vinculada ao seu próprio cluster no MongoDB Atlas, conforme exemplo:

MONGO_URI=mongodb+srv://<user.name>:<user.password>@plss.ekjdksa.mongodb.net/?appName=PLSS 

(Originalmente, a porta em que o servidor rodaria fica nesse arquivo também, entretanto, para facilitar, tirei a necessidade dessa variável nesse arquivo.)

## Sobre o Projeto

Este projeto foi desenvolvido como parte de um teste técnico. O meu foco principal foi a estruturação de uma arquitetura limpa e escalável (MVC), utilizando o modelo try/catch para evitar confusão em erros internos.

Essa branch e trata da mesma API, porém integrada com o MongoDB, banco de dados não relacionável, por meio do Mongoose.

## Tecnologias Utilizadas

* **Node.js** (Runtime environment)
* **Express** (Framework web)
* **CORS** (Cross-origin resource sharing)
* **MongoDB** (NoSQL Database)
* **JavaScript**

## Documentação da API

Todos os corpos de requisição (Body) e respostas estão em formato JSON.

### Animais (Pacientes)

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `GET` | `/animais` | Lista todos os animais cadastrados | 
| `GET` | `/animais/:id` | Retorna detalhes de um animal específico pelo ID |
| `GET` | `/animais/nome/:nome` | Retorna detalhes de um animal específico pelo nome |
| `POST` | `/amimais` | Cadastra um novo animal |
| `PUT` | `/animais/:id` | Atualiza dados de um animal existente | 
| `DELETE` | `/animais/:id` | Remove um animal do sistema | 

### Veterinários

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `GET` | `/veterinarios` | Lista todos os veterińários cadastrados | 
| `POST` | `/veterinarios` | Cadastra um novo veterinário | 

### Consultas

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `GET` | `/consultas` | Lista todos as consultas agendadas | 
| `GET` | `/consultas/:id` | Busca a consulta pelo ID | 
| `POST` | `/consultas` | Cadastra uma nova consulta | 


## Estrutura do Projeto

O projeto segue o padrão MVC (Model-View-Controller) para garantir separação de responsabilidades e fácil manutenção.

```
src/
├── controllers/    # Lógica do programa e regras da aplicação
├── database/       # Configuração do Banco de Dados MongoDB
├── models/         # Modelos dos objetos a serem salvos no Banco de dados
├── routes.js       # Definição dos endpoints
└── app.js          # Configuração do Express
server.js           # Ponto de entrada da aplicação
```

## Considerações

Optei pela implementação de blocos try/catch nos controllers para evitar crash da aplicação e garantir retornos HTTP adequados, além do Clean Code. baseado no foco em nomes de variáveis descritivos e funções com responsabilidade única.

---

## Desenvolvido por **Vinicius Bida**
