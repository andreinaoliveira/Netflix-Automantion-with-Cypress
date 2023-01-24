<img src="https://user-images.githubusercontent.com/51168329/213314943-327e7274-cd6a-4561-9bf0-0ab10975a43d.png">
<div align="center">
  <a href="https://github.com/andreinaoliveira/Netflix-Automantion-with-Cypress"><img alt="hits" src="https://hits.sh/github.com/andreinaoliveira/Netflix-Automantion-with-Cypress.svg"/></a>
  <a href="https://github.com/andreinaoliveira/Netflix-Automantion-with-Cypress/graphs/commit-activity"><img src="https://img.shields.io/github/last-commit/andreinaoliveira/netflix-automantion-with-cypress"></a>
  <a href="https://github.com/andreinaoliveira/Netflix-Automantion-with-Cypress"><img src="https://img.shields.io/badge/status-In%20Progress-yellow"></a>
  <a href="https://github.com/andreinaoliveira/Netflix-Automantion-with-Cypress/stargazers"><img src="https://img.shields.io/github/stars/andreinaoliveira/Netflix-Automantion-with-Cypress?style=social"></a>
  <a href="https://github.com/andreinaoliveira/Netflix-Automantion-with-Cypress/network/members"><img src="https://img.shields.io/github/forks/andreinaoliveira/Netflix-Automantion-with-Cypress?style=social"></a>
  <a href="https://github.com/andreinaoliveira"><img src="https://img.shields.io/github/followers/andreinaoliveira?style=social"></a>
</div>

## 💬 Sobre
Projeto em andamento que busca criar um conjunto de testes no site da Netflix através do Cypress visando aplicar o conhecimento com a tecnologia.
  
## 💾 Instalação
- Node
- Clonar o projeto ```git clone https://github.com/andreinaoliveira/Netflix-Automantion-with-Cypress.git```
- Rodar o comando pelo cmd na pasta do projeto ```npm i```
- <b>[Opcional]</b> Criar na raiz um arquivo chamado ```cypress.env.json``` contendo os dados da sua conta na netflix no caso de vc querer executar os testes que estão após o login. Caso nao insira, os testes estarão limitados as páginas no qual não precisa estar logado 
```
{
    "userValid":{
        "email": "SEU_EMAIL_AQUI",
        "password": "SUA_SENHA_AQUI"
    }
}
```
## 💻 Cenários de teste
### Home
- Acessar tela
<div align="center">
  <table>
    <tr>
      <td>
        <b>Caso de Teste</b>
      </td>
      <td>
        <b>Teste</b>
      </td>
    </tr>
    <tr>
      <td>
        <img src=".jpg" width="300px" height="170px">
      </td>
      <td>
          <img src="https://user-images.githubusercontent.com/51168329/214357725-9e2ac0af-30d7-4a1b-91e8-e7bbdc2cdcc4.gif" width="600px">
      </td>
    </tr>
  </table>
</div>
- Checar tela
<div align="center">
  <table>
    <tr>
      <td>
        <b>Caso de Teste</b>
      </td>
      <td>
        <b>Teste</b>
      </td>
    </tr>
    <tr>
      <td>
        <img src=".jpg" width="300px" height="170px">
      </td>
      <td>
          <img src="https://user-images.githubusercontent.com/51168329/214357725-9e2ac0af-30d7-4a1b-91e8-e7bbdc2cdcc4.gif" width="600px">
      </td>
    </tr>
  </table>
</div>

### Login
#### Acessar tela
- Checar tela
- Login com senha inválida
- Login com  usuário inválido
- Login com usuário válido

### Browse
- Acessar tela
- Checar tela


