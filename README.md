# POMODORO GAME

### O que é pomodoro? 
![pomodoro-icon](https://user-images.githubusercontent.com/8668037/109592402-f919fd80-7aed-11eb-8596-8a5779d2febc.png)

Técnica pomodoro é um método de gerenciamento de tempo, que consiste em manter o foco em uma determinada atividade por um
período e efetuar pequenas pausas. Para mais informações consulte [wiki](https://pt.wikipedia.org/wiki/T%C3%A9cnica_pomodoro)

### Sobre o projeto

O projeto trata-se de uma SPA (Single Page Application) desenvolvida na trilha de Front-end. 
Utilizando a poderosa biblioteca ReactJs e o framework NextJs. 
Baseando-se na técnica de pomodoro, com adicional de um sistema de recompensas criamos um mini-game onde ao realizar os ciclos do pomodoro ganhamos XP e subimos de nível ao realizar as tarefas, que vão desde execícios físicos a exercícios para o descanso dos olhos.

### Sobre a Next Level Week

![Captura de Tela 2021-03-01 às 17 52 04](https://user-images.githubusercontent.com/8668037/109592502-1e0e7080-7aee-11eb-9e1b-d1c261ccbded.png)

[NLW (Next Level Week)](https://nextlevelweek.com/inscricao/4) é um evento gratuito organizado pelo equipe RocketSeat, basicamente uma maratona de programação, 
onde dentro de uma semana desenvolvemos um produto de software. O evento está em sua quarta edição e é separado por trilhas.
Onde cada uma delas são explorados os recursos de cada tecnologia e trabalhado boas práticas de  programação. 

**Trilhas**
- ReactJS  | Front-end
- Node.js  | Back-end
- Elixir   | Back-end

### Tecnologias

- ReactJs | Biblioteca
- NextJs | Framework
- NodeJs v15.5.1 | Ambiente de execução
- Npm v7.3.0 | Gerenciador de pacotes
- Yarn v1.22.10 | Gerenciador de pacotes
- JS Cookie | Biblioteca

### Agora bora codar

![Captura de Tela 2021-03-01 às 17 52 52](https://user-images.githubusercontent.com/8668037/109592725-7e9dad80-7aee-11eb-9e06-1af3e20599b8.png)

---

## Preparando Ambiente de desenvolvimento

A seguir veremos como preparar o ambiente de desenvolimento baseando-se no sistema operacional Mac Os.

- Instalando node através do [Homebrew](https://formulae.brew.sh/formula/node)
```shell script
rafaelcosta$ brew install node
```

Ao instalar o node já teremos acesso ao gerenciador de pacotes, podemos conferir digitando os comandos a seguir
```shell script
rafaelcosta$ node -v 
v15.5.1

rafaelcosta$ npm -v
7.3.0
```
Opcionalmente podemos instalar o gerenciador de pacote [Yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable)
```shell script
rafaelcosta$ npm install --global yarn
```
Confira se a instalação foi efetuada corretamente testando com comando
```shell script
rafaelcosta$ yarn --version
1.22.10
```

#### Fazendo checkout do projeto
- Clonando o projeto no git
```shell script
rafaelcosta$ git clone https://github.com/rafaelcostab/pomodoro-game.git
```

Após concluir o download do projeto, precisaremos instalar as dependências do projeto sendo assim no diretório do projeto

```shell script
rafaelcosta$ cd /pomodoro-game/pomodoro
```

- Instalando typescript e suas dependencias
```shell script
rafaelcosta$ yarn add typescript @types/react @typres/react-dom @types/node -D
```

- Instalando biblioteca js cookie
```shell script
rafaelcosta$ yarn add js-cookie
```

- Adicionando tipagem para o typescript entender a biblioteca js
```shell script
rafaelcosta$ yarn add @types/js-cookie -D
```

#### Fazendo deploy

Para colocar a aplicação no ar, faremos o deploy via [vercel](https://vercel.com/), caso não tenha será necessário criar uma conta 

- Instalando vercel
```shell script
rafaelcosta$ npm i -g vercel
```

Efetuando login, após rodar o comando abaixo, será solicitado o email da conta cadastrada e em seguida será enviado um 
email para efetuar a autenticação.
```shell script
rafaelcosta$ vercel login
```

Para fazer o deploy da aplicação é bem simples, será necessário apenas estar na pasta raiz do projeto e digigar o comando
```shell script
rafaelcosta$ vercel
```
