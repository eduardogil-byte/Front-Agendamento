import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CalendarioPage from "./pages/CalendarioPage";

function App() {
  const [agendamentos, setAgendamentos] = useState([]);

  function adicionarAgendamento(novoAgendamento) {
    setAgendamentos([...agendamentos, novoAgendamento]);
  }

  return (
    <Routes>
      <Route path="/" element={<Home onAdicionar={adicionarAgendamento} />} />

      <Route
        path="/calendario"
        element={<CalendarioPage agendamentos={agendamentos} />}
      />
    </Routes>
  );
}

export default App;
