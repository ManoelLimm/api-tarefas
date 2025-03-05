API Tarefas

Uma API simples para gerenciamento de tarefas, desenvolvida com Node.js, Express e MySQL.

Descrição

Esta API permite criar, listar, atualizar e deletar tarefas. Cada tarefa possui um **nome** e um **status**, que pode ser:
- `pendente`
- `em andamento`
- `concluída`

A aplicação utiliza:
- **Node.js** com ES Modules
- **Express** para criação das rotas e gerenciamento de middlewares
- **MySQL** para persistência dos dados
- **dotenv** para gerenciamento das variáveis de ambiente

## Pré-requisitos

- [Node.js](https://nodejs.org/) (recomenda-se versão 14 ou superior)
- [MySQL](https://www.mysql.com/)
- Gerenciador de pacotes [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/ManoelLimm/api-tarefas.git
   ```

2. **Acesse a pasta do projeto:**

   ```bash
   cd api-tarefas
   ```

3. **Instale as dependências:**

   ```bash
   npm install
   ```
   ou, se preferir:
   ```bash
   yarn install
   ```

## Configuração

Crie um arquivo `.env` na raiz do projeto para configurar as variáveis de ambiente do banco de dados. Exemplo:

```env
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_HOST=localhost
DB_DATABASE=nodejs
DB_PORT=3306
```

> **Observação:** Certifique-se de que o MySQL está em execução e que o banco de dados com o nome **nodejs** existe. Caso não exista, crie-o.

## Execução

Para iniciar o servidor em modo de desenvolvimento, execute:

```bash
npm start
```

O servidor iniciará na porta **3000** e exibirá a mensagem `Servidor On` no console.

## Endpoints da API

### Adicionar Tarefa

- **URL:** `POST /api/tarefa`
- **Body:** JSON contendo:
  - `nome` (string) - Nome da tarefa (obrigatório)
  - `status` (string) - Status da tarefa. Valores permitidos: `pendente`, `em andamento` ou `concluída` (obrigatório)
- **Resposta:** Mensagem de sucesso ou erro.

### Listar Tarefas

- **URL:** `GET /api/tarefas`
- **Resposta:** Array com as tarefas cadastradas.

### Atualizar Tarefa

- **URL:** `PUT /api/tarefa/:id`
- **Parâmetros:**
  - `id` - ID da tarefa a ser atualizada
- **Body:** JSON contendo:
  - `nome` (string) - Nome da tarefa (opcional)
  - `status` (string) - Status da tarefa (opcional)
- **Resposta:** Mensagem de sucesso ou erro.

### Deletar Tarefa

- **URL:** `DELETE /api/tarefa/:id`
- **Parâmetros:**
  - `id` - ID da tarefa a ser deletada
- **Resposta:** Mensagem de sucesso ou erro.

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)
- [dotenv](https://github.com/motdotla/dotenv)
- [nodemon](https://nodemon.io/)
- [prettier](https://prettier.io/)

## Contribuições

Contribuições são bem-vindas! Se você deseja contribuir para o projeto, por favor:
- Abra uma *issue* para discutir as alterações desejadas;
- Envie um *pull request* detalhando as modificações.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

