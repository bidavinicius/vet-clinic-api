# API para Clínica Veterinária

API RESTful desenvolvida em Node.js para o gerenciamento de uma clínica veterinária. O sistema permite o cadastro e administração de veterinários, pacientes (animais) e agendamento de consultas.

## Sobre o Projeto

Este projeto foi desenvolvido como parte de um teste técnico. O meu foco principal foi a estruturação de uma arquitetura limpa e escalável (MVC), utilizando o modelo try/catch para evitar confusão em erros internos.

Por se tratar de um teste de lógica e arquitetura, a persistência de dados é realizada **em memória**, dispensando a configuração de bancos de dados externos para execução imediata.

## Tecnologias Utilizadas

* **Node.js** (Runtime environment)
* **Express** (Framework web)
* **CORS** (Cross-origin resource sharing)
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
| `POST` | `/consultas` | Cadastra uma nova consulta | 


## Estrutura do Projeto

O projeto segue o padrão MVC (Model-View-Controller) para garantir separação de responsabilidades e fácil manutenção.

```
src/
├── controllers/    # Lógica do programa e regras da aplicação
├── database/       # Banco de dados (In-Memory)
├── routes.js       # Definição dos endpoints
└── app.js          # Configuração do Express
server.js           # Ponto de entrada da aplicação
```

## Considerações

Optei pela implementação de blocos try/catch nos controllers para evitar crash da aplicação e garantir retornos HTTP adequados, além do Clean Code. baseado no foco em nomes de variáveis descritivos e funções com responsabilidade única.

---

## Desenvolvido por **Vinicius Bida**
