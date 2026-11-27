import "./style.css";

const app = document.querySelector("#app");

app.innerHTML = `
  <main class="container">
    <h1>Instituto Caminhos do Saber</h1>
    <p>Educação de qualidade para crianças e jovens · Projeto Integrador Extensionista II</p>
    <p id="status" class="status">Verificando a API...</p>
  </main>
`;

async function verificarApi() {
  const statusEl = document.querySelector("#status");
  try {
    const resposta = await fetch("/api/health");
    if (!resposta.ok) throw new Error(`HTTP ${resposta.status}`);
    const dados = await resposta.json();
    const dataHora = new Date(dados.timestamp).toLocaleString("pt-BR");
    statusEl.textContent = `Status da API: ${dados.status} (${dataHora})`;
    statusEl.classList.add("ok");
  } catch (erro) {
    statusEl.textContent = `Status da API: indisponível (${erro.message})`;
    statusEl.classList.add("erro");
  }
}

verificarApi();
