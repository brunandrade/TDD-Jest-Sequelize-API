<h1 align="center">
    TDD Jest Sequelize API
</h1>

## Projeto

A aplicação é uma API REST contendo as operações de um CRUD para estudo e prática com as tecnologias, Node, JavaScript, MySQL, SQLite, JWT, Sequelize, Jest e Express. O projeto foi desenvolvido com a linguagem JavaScript com a base em Node e Express. Utilizando o padrão MVC para organização e estrutura do projeto. Foram utlizadas duas bases de dados, uma para o desenvolvimento com MySQL e a outra para a realização dos testes, com SQLite3. Para a comunicação da base com a aplicação foi usado o ORM Sequelize, para a criação das models, entidades e seus relacionamentos com as migrations. A parte de TDD foi feita utilizando Jest, dividido em dois tipos de testes:

- O teste unitário, para métodos e funcionalidades especificas. Como a validação do campo de email ou registro usuário.
- E o teste integrado, para métodos que dependem de um conjunto de funcionalides para sua execução. Como a validação das credenciais do token JWT nas rotas privadas.

## Tecnologias

- Node
- Express
- JavaScript
- MySQL
- SQLite3
- Sequelize
- JWT
- Jest

## Instruções

1. Para rodar o projeto é necessário criar uma base de dados utilizando o MySQL e alterar o nome para a sua base criada no arquivo `.env` presente na variável ambiente `DB_NAME` na raiz do projeto. Além de mudar as confgurações de usuário, porta ou host casa sejam diferentes, também presentes nas variáveis: `DB_HOST`, `DB_USER`, `DB_PASS`.

2. Após criar a base de dados é necessário rodar o compando abaixo para instalar todas as dependências utilizadas no projeto.

### `yarn install`

3. Após instalar as dependências é preciso rodar o comando abaixo para que as tabelas sejam criadas e preenchidas na base de dados de desenvolvimento MySQL.

### `yarn sequelize db:migrate`

4. Para inicializar o servidor é preciso utilizar o comando abaixo. A aplicação irá rodar no dominio: [http://localhost:3333](http://localhost:3333) para a realização das requisições http.

### `yarn dev`

5. Para rodar os testes da aplicação é preciso utilizar o comando abaixo, o mesmo irá rodar o comando da migration e criar a base do SQLite3 que ficará presente na pasta de `__tests__` com o nome de `database`. Ao rodar o comando é apresentado no terminal um resumo do testes e o resultado dos mesmos. Após o teste ser finalizado, o comando de desfazer as migrations também é executado, para assim limpar a base de dados e deixa-la preparada para os próximos testes.

### `yarn test`
