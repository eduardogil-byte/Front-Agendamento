const API_URL = "http://127.0.0.1:8000";

export async function criarAgendamento(agendamento) {
  const resposta = await fetch(`${API_URL}/agendamentos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(agendamento),
  });

  if (!resposta.ok) {
    throw new Error("Erro ao criar agendamento");
  }

  return await resposta.json();
}

export async function listarAgendamentos() {
  const resposta = await fetch(`${API_URL}/agendamentos`);

  if (!resposta.ok) {
    throw new Error("Erro ao listar agendamentos");
  }

  return await resposta.json();
}