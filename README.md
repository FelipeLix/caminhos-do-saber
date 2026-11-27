# Instituto Caminhos do Saber

Projeto Integrador Extensionista II — esqueleto do site da ONG Instituto Caminhos do Saber (educação para crianças e jovens), criado com **Vite+** (Vanilla, JavaScript) e uma API **Express**.

A página inicial consulta a rota `GET /api/health` e mostra o status da API com data e hora.

## Requisitos

- [Node.js](https://nodejs.org/) 20 ou superior
- npm (já vem com o Node.js)

## Como rodar

1. Clone o repositório e entre na pasta:

   ```bash
   git clone https://github.com/FelipeLix/caminhos-do-saber.git
   cd caminhos-do-saber
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Crie o arquivo `.env` a partir do exemplo:

   ```bash
   cp .env.example .env
   ```

   No Windows (PowerShell): `Copy-Item .env.example .env`

4. Em um terminal, inicie a API (porta 3001):

   ```bash
   npm run api
   ```

5. Em outro terminal, inicie o front-end (porta 5173):

   ```bash
   npm run dev
   ```

6. Abra <http://localhost:5173>. A página deve mostrar **"Status da API: ok"** com a data e a hora.

## Estrutura

```
├── index.html          # Página inicial
├── src/
│   ├── main.js         # Busca /api/health e exibe o status
│   └── style.css
├── server/
│   └── index.js        # API Express com GET /api/health
├── vite.config.ts      # Proxy de /api para http://localhost:3001
├── .env.example        # Modelo das variáveis de ambiente
└── package.json
```

## Rotas da API

| Método | Rota          | Resposta                                          |
| ------ | ------------- | ------------------------------------------------- |
| GET    | `/api/health` | `{ "status": "ok", "timestamp": "2026-...Z" }`    |

## Variáveis de ambiente

| Variável | Padrão | Descrição               |
| -------- | ------ | ----------------------- |
| `PORT`   | `3001` | Porta da API Express    |

> O arquivo `.env` não é versionado (está no `.gitignore`). Use o `.env.example` como modelo.
