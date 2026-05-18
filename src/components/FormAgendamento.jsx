import { useState } from "react";

function FormAgendamento({ onAdicionar }) {
  const [compromisso, setCompromisso] = useState("");
  const [dataHora, setDataHora] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!compromisso || !dataHora) {
      alert("Preencha o compromisso e a data/hora.");
      return;
    }

    const novoAgendamento = {
      id: Date.now(),
      compromisso,
      dataHora,
    };

    onAdicionar(novoAgendamento);

    setCompromisso("");
    setDataHora("");
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
        className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition"
      >
        Enviar
      </button>
    </form>
  );
}

export default FormAgendamento;
