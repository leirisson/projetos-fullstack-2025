import { Routes, Route } from "react-router-dom";
import { Tarefas } from "../pages/Tarefas";
import { FormularioTarefas } from "../pages/FormularioTarefas";


// 📘 Explicação:
// BrowserRouter é o container principal das rotas.
// Routes define o conjunto de rotas da aplicação.
// Route mapeia um caminho da URL para um componente React.

export function AppRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Tarefas />} />
        <Route path="/form" element={<FormularioTarefas />} />
      </Routes>
  );
}
