# Desafio de código Backend NodeJS

## Descrição do Projeto :sparkles:
<p align="justify">API REST com NestJS e TypeScript  com autenticação com  JWT, Banco de Dados MongoDB e Mongoose.<p/>

## Ferramentas Utilizadas no Desenvolvimento :books:
* NestJS
* MongoDB
* Mongoose
* JWT

## Instalação

```bash
$ npm install
```

## Executando o aplicativo

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

## Ultilizando o aplicativo

<p>No app.module no modulo MongooseModule coloque a URL de conexão com o banco de dados.
Criar um usuario na rota user com os seguites dados 
{"name":  string, "email":  string, "password":  string}, logo apos a criação do usuario fazer um login na rota auth/login com os seguintes dados 
email, password logo será gerado um token de autenticação.
Terá que alimentar o banco de dados mamualmente para teste.
</p>

## Manter contato

- Author - [Maycon Silva](https://mayconsilvadev.netlify.app)

## License

  Nest is [MIT licensed](LICENSE).
