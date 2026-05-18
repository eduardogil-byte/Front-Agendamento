import { useNavigate } from "react-router-dom";
import FormAgendamento from "../components/FormAgendamento";

function Home({ onAdicionar }) {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-slate-100 flex flex-col items-center px-4 py-10">
      <h1 className="text-3xl font-bold text-slate-800 mb-8">
        App de Agendamento
      </h1>

      <FormAgendamento onAdicionar={onAdicionar} />

      <button
        onClick={() => navigate("/calendario")}
        className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition"
      >
        Abrir calendário
      </button>
    </main>
  );
}

export default Home;
