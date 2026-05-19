import { useState } from "react";
import { criarAgendamento } from "../services/api";

function FormAgendamento({ onAdicionar }) {
  const [compromisso, setCompromisso] = useState("");
  const [telefone, setTelefone] = useState("");
  const [dataHora, setDataHora] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!compromisso || !telefone || !dataHora) {
      alert("Preencha todos os campos.");
      return;
    }

    try {
      setCarregando(true);

      const novoAgendamento = {
        compromisso,
        telefone,
        data_hora: new Date(dataHora).toISOString(),
      };

      const resposta = await criarAgendamento(novoAgendamento);

      onAdicionar(resposta.agendamento);

      setCompromisso("");
      setTelefone("");
      setDataHora("");

      alert("Agendamento salvo!");
    } catch (erro) {
      console.error(erro);
      alert("Erro ao salvar agendamento.");
    } finally {
      setCarregando(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md bg-white rounded-xl shadow-md p-5 flex flex-col gap-4"
    >
      <div className="flex flex-col gap-1">
        <label className="text-slate-700 font-medium">Compromisso</label>
        <input
          type="text"
          placeholder="Ex: Consulta médica"
          value={compromisso}
          onChange={(e) => setCompromisso(e.target.value)}
          className="border border-slate-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-slate-700 font-medium">Telefone WhatsApp</label>
        <input
          type="text"
          placeholder="Ex: 5554999481803"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          className="border border-slate-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-slate-700 font-medium">Data e horário</label>
        <input
          type="datetime-local"
          value={dataHora}
          onChange={(e) => setDataHora(e.target.value)}
          className="border border-slate-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        disabled={carregando}
        className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white py-2 rounded-lg font-medium transition"
      >
        {carregando ? "Salvando..." : "Enviar"}
      </button>
    </form>
  );
}

export default FormAgendamento;