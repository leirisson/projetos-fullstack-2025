import { api } from "./api";
import { type ITarefa } from "../types/ITarefa";



export const tarefaService = {
    //listar todos as tarefas
    async getAll(): Promise<ITarefa>{
        const responseApi = await api.get("/tarefa")
        return responseApi.data
    },


    //criar uma nova tarefa
    async create(tarefa: ITarefa): Promise<void>{
        await api.post('/tarefa', tarefa)
    }
    
}