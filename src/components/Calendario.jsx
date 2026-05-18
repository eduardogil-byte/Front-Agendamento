function Calendario({ diaSelecionado, setDiaSelecionado }) {
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label className="text-slate-700 font-medium">Escolha um dia</label>

      <input
        type="date"
        value={diaSelecionado}
        onChange={(e) => setDiaSelecionado(e.target.value)}
        className="border border-slate-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-green-500"
      />
    </div>
  );
}

export default Calendario;