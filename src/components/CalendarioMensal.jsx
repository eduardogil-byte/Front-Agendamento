function CalendarioMensal({
  dataAtual,
  setDataAtual,
  diaSelecionado,
  setDiaSelecionado,
  agendamentos,
}) {
  const nomesMeses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const diasSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

  const ano = dataAtual.getFullYear();
  const mes = dataAtual.getMonth();

  const primeiroDiaDoMes = new Date(ano, mes, 1);
  const ultimoDiaDoMes = new Date(ano, mes + 1, 0);

  const quantidadeDias = ultimoDiaDoMes.getDate();
  const diaSemanaInicio = primeiroDiaDoMes.getDay();

  const dias = [];

  for (let i = 0; i < diaSemanaInicio; i++) {
    dias.push(null);
  }

  for (let dia = 1; dia <= quantidadeDias; dia++) {
    dias.push(dia);
  }

  function formatarData(dia) {
    const mesFormatado = String(mes + 1).padStart(2, "0");
    const diaFormatado = String(dia).padStart(2, "0");

    return `${ano}-${mesFormatado}-${diaFormatado}`;
  }

  function mesAnterior() {
    setDataAtual(new Date(ano, mes - 1, 1));
    setDiaSelecionado("");
  }

  function proximoMes() {
    setDataAtual(new Date(ano, mes + 1, 1));
    setDiaSelecionado("");
  }

  function temCompromisso(dia) {
    const dataFormatada = formatarData(dia);

    return agendamentos.some(
      (item) => item.dataHora.split("T")[0] === dataFormatada,
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={mesAnterior}
          className="bg-slate-200 hover:bg-slate-300 text-slate-700 px-4 py-2 rounded-lg transition"
        >
          Anterior
        </button>

        <h1 className="text-2xl font-bold text-slate-800">
          {nomesMeses[mes]} {ano}
        </h1>

        <button
          onClick={proximoMes}
          className="bg-slate-200 hover:bg-slate-300 text-slate-700 px-4 py-2 rounded-lg transition"
        >
          Próximo
        </button>
      </div>

      <div className="grid grid-cols-7 gap-2 mb-2">
        {diasSemana.map((dia) => (
          <div
            key={dia}
            className="text-center font-semibold text-slate-600 py-2"
          >
            {dia}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {dias.map((dia, index) => {
          if (dia === null) {
            return <div key={index} className="h-24"></div>;
          }

          const dataFormatada = formatarData(dia);
          const selecionado = diaSelecionado === dataFormatada;
          const possuiCompromisso = temCompromisso(dia);

          return (
            <button
              key={index}
              onClick={() => setDiaSelecionado(dataFormatada)}
              className={`
                h-24 rounded-xl border p-2 flex flex-col items-start justify-between transition
                ${
                  selecionado
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white hover:bg-slate-100 text-slate-700 border-slate-200"
                }
              `}
            >
              <span className="font-bold">{dia}</span>

              {possuiCompromisso && (
                <span
                  className={`
                    text-xs px-2 py-1 rounded-full
                    ${selecionado ? "bg-white text-blue-600" : "bg-green-100 text-green-700"}
                  `}
                >
                  Tem compromisso
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default CalendarioMensal;
