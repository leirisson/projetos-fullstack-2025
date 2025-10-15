import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { tarefaService } from "@/services/tarefaService";
import type { ITarefa } from "@/types/ITarefa";
import { Edit, Trash } from "lucide-react";
import { useEffect, useState } from "react";

type TarefaProps = {
  id?: string;
  titulo: string;
  descricao: string;
  cretatedAt?: Date | string;
  updatedAt?: Date | string;
};

export function Tabela() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);

  useEffect(() => {
    async function loadTarefas() {
      try {
        const data = await tarefaService.getAll();
        console.log(data);
        setTarefas(data as any);
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      }
    }
    loadTarefas();
  }, [tarefas]);

  async function onDeleteTarefa(id: string) {
    await tarefaService.deletar(id);
    alert("Tarefa deletada com sucesso !");
  }

  return (
    <Table>
      <TableCaption>Lista e tarefas</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Titulo</TableHead>
          <TableHead>Descrição</TableHead>
          <TableHead>Date de criação</TableHead>
          <TableHead>Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tarefas.map((tarefa: TarefaProps) => (
          <TableRow key={tarefa.id}>
            <TableCell className="font-medium">{tarefa.id}</TableCell>
            <TableCell>{tarefa.titulo}</TableCell>
            <TableCell>{tarefa.descricao}</TableCell>
            <TableCell>
              {new Date(tarefa.cretatedAt).toLocaleDateString("pt-br", {
                day: "numeric",
                month: "long",
                year: "2-digit",
              })}
            </TableCell>
            <TableCell className="flex gap-2">
              <div>
                <span>
                  {" "}
                  <Trash onClick={() => onDeleteTarefa(tarefa.id as string)} />
                </span>
              </div>
              <div>
                {" "}
                <span>
                  {" "}
                  <Edit onClick={() => alert("Editar")} />
                </span>
              </div>
            </TableCell>
            {/* <TableCell className="text-right">{invoice.totalAmount}</TableCell> */}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
