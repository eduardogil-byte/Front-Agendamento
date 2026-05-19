import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { listarAgendamentos } from "./services/api";
import Home from "./pages/Home";
import CalendarioPage from "./pages/CalendarioPage";

function App() {
  const [agendamentos, setAgendamentos] = useState([]);

  async function carregarAgendamentos() {
    try {
      const dados = await listarAgendamentos();
      setAgendamentos(dados);
    } catch (erro) {
      console.error("Erro ao carregar agendamentos:", erro);
    }
  }

  useEffect(() => {
    carregarAgendamentos();
  }, []);

  function adicionarAgendamento(novoAgendamento) {
    setAgendamentos((listaAtual) => [...listaAtual, novoAgendamento]);
  }

  return (
    <Routes>
      <Route
        path="/"
        element={<Home onAdicionar={adicionarAgendamento} />}
      />

      <Route
        path="/calendario"
        element={<CalendarioPage agendamentos={agendamentos} />}
      />
    </Routes>
  );
}

export default App;