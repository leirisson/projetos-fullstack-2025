import { useEffect, useState } from "react";
import type { ITarefa } from "../types/ITarefa";
import { useNavigate } from "react-router-dom";
import { tarefaService } from "../services/tarefaService";

export function Tarefas() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadTarefas() {
      try {
        const data = await tarefaService.getAll();
        setTarefas(data as any);
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      }
    }
    loadTarefas();
  }, []);

  return (
    <>
      <h1>Pagina de lista tarefas</h1>
      <ul>
        {tarefas.map((t) => (
          <li key={`id-t${t.id}`}>
            <span>Titulo: {t.titulo}</span>
            <span>Descrição: {t.descricao}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
