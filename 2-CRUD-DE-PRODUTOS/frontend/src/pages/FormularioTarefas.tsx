import { useState, type FormEvent } from "react";
import { tarefaService } from "../services/tarefaService";

export function FormularioTarefas() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    await tarefaService.create({titulo, descricao});

    setTitulo('')
    setDescricao('')
  }
  return (
    <>
      <h1>Formulario de tarefas</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="titulo">Titulo</label>
          <input
            type="text"
            name="titulo"
            placeholder="titutlo da tarefa"
            onChange={(e) => setTitulo(e.target.value)}
            value={titulo}
          />
        </div>
        <div>
          <label htmlFor="descricao">Decirção</label>
          <textarea
            name="descricao"
            id="descrcao"
            placeholder="descricao da tarefa"
            onChange={(e) => setDescricao(e.target.value)}
            value={descricao}
          ></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}
