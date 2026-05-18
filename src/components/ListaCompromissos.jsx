function ListaCompromissos({ compromissos }) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-slate-800 mb-3">
        Compromissos
      </h3>

      {compromissos.length === 0 ? (
        <p className="text-slate-500">Nenhum compromisso nesse dia.</p>
      ) : (
        <ul className="flex flex-col gap-3">
          {compromissos.map((item) => (
            <li
              key={item.id}
              className="bg-slate-100 border border-slate-200 rounded-lg p-3"
            >
              <strong className="text-slate-800">{item.compromisso}</strong>

              <p className="text-slate-600 text-sm mt-1">
                Horário:{" "}
                {new Date(item.dataHora).toLocaleTimeString("pt-BR", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListaCompromissos;
