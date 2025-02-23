
# RESTful Click Tracker

Esta é uma API RESTful desenvolvida em Node.js que permite contabilizar cliques feitos por usuários em um link específico. Além de registrar cada clique, a aplicação também ranqueia os usuários com base na quantidade de cliques realizados, fornecendo uma visão clara da posição de cada um no ranking geral


## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`PORT`

Porta padrão para a api rodar.

`POSTGRES_URL`

URL do banco de dados POSTGRES

`REDIS_URL`
URL do banco de dados REDIS

`WEB_URL`

URL para a página de redirecionamento


## Aprendizados
Meu principal aprendizado aqui foi ter colocado em prática os conceitos de redis e docker no mesmo lugar, eu nunca havia trabalhado em um projeto pessoal antes com docker e foi um aprendizado muito desafiador mas importante para mim! Criei essa api com o intuito de colocar em prátia meus conhecimentos em restAPi com o nodeJs juntamente com o Typescript.

## Documentação da API

#### A documentação pode ser vista dentro do projeto com o comando:

```http
  GET /docs
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id_user` | `string` | **Obrigatório**. O id do seu usuário |

#### Redireciona para outro link

```http
    http://localhost:3030/invites/id_user
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |




## Conteúdos
- Node 
- TypeScript
- Docker
- Redis
- PostgreSQL
- Fastify


## Uso/Exemplos

```javascript
import Component from 'my-project'

function App() {
  return <Component />
}
```


## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/kyoulau/Fastify-connect
```

Entre no diretório do projeto

```bash
  cd my-project
```

Construa as imagens do docker 

```bash
  docker-compose build
  docker-compose up
```
Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run start
```


## Melhorias
- [ ]  Testes Unitários
- [ ]  DTO's de entrada e saída
- [ ]  Classes de erros personalizadas
- [ ]  Integração com FrontEnd




## Autores

- [@kyoulau](https://www.github.com/kyoulau)

