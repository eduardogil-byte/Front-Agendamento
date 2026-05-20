import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CalendarioMensal from "../components/CalendarioMensal";
import ListaCompromissos from "../components/ListaCompromissos";

function CalendarioPage({ agendamentos }) {
  const navigate = useNavigate();
  const [dataAtual, setDataAtual] = useState(new Date());
  const [diaSelecionado, setDiaSelecionado] = useState("");

  function pegarData(dataHora) {
    if (!dataHora) return "";
    return dataHora.split("T")[0];
  }

  const compromissosDoDia = agendamentos.filter((item) => {
    return pegarData(item.data_hora) === diaSelecionado;
  });

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <button
          onClick={() => navigate("/")}
          className="mb-6 bg-slate-700 hover:bg-slate-800 text-white px-5 py-2 rounded-lg transition"
        >
          Voltar
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <section className="lg:col-span-2 bg-white rounded-xl shadow-md p-5">
            <CalendarioMensal
              dataAtual={dataAtual}
              setDataAtual={setDataAtual}
              diaSelecionado={diaSelecionado}
              setDiaSelecionado={setDiaSelecionado}
              agendamentos={agendamentos}
            />
          </section>

          <section className="bg-white rounded-xl shadow-md p-5">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Dia selecionado
            </h2>

            {diaSelecionado ? (
              <>
                <p className="text-slate-600 mb-4">
                  {diaSelecionado.split("-").reverse().join("/")}
                </p>

                <ListaCompromissos compromissos={compromissosDoDia} />
              </>
            ) : (
              <p className="text-slate-500">Clique em um dia do calendário.</p>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}

export default CalendarioPage;
