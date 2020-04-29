<h1 align="center">Desafio Fundamentos Node - BootCamp GoStack</h1>

## :rocket: Sobre o desafio

Este documento, tras a minha resolução do desafio "Fundamentos Node". Onde criou-se uma aplicação utilizando Node.js junto ao TypeScript,e ainda conceitos de models, repositories e services!

Esta aplicação armazena transações financeiras de entrada e saída, e permitir o cadastro e a listagem dessas transações.

## :gear: Como Usar
Para utilizar o codigo, basta digitar os seguintes comandos na pasta do desejada:

``` JavaScript
// Clonar esta aplicação
git clone <HTTPS ou SSH>

//Instalar as Dependencias
yarn

//Para rodar a aplicação
yarn dev:server
```

## :dart: Testes
Para completar este desafio, era necessario que o programa, passasse pelos seguintes testes:
- **`should be able to create a new transaction`**: Para que esse teste passe, sua aplicação deve permitir que uma transação seja criada, e retorne um json com a transação criado.

- **`should be able to list the transactions`**: Para que esse teste passe, sua aplicação deve permitir que seja retornado um objeto contendo todas as transações junto ao balanço de income, outcome e total das transações que foram criadas até o momento.

- **`should not be able to create outcome transaction without a valid balance`**: Para que esse teste passe, sua aplicação não deve permitir que uma transação do tipo `outcome` extrapole o valor total que o usuário tem em caixa, retornando uma resposta com código HTTP 400 e uma mensagem de erro no seguinte formato: `{ error: string }`

**Obs: Os testes foram criados pela [RocketSeat](https://rocketseat.com.br/)**

Para visualizar o envio dos testes, basta entrar na pasta do programa, e roda:

``` JavaScript
yarn test
```

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

<div align= "right">
  <h6>
    <a href="https://www.linkedin.com/in/matheus-akio-santos-ishiguro-756394129/"> By Matheus Ishiguro :v: </a>
  </h6>
</div>
