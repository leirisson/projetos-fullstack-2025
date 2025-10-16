import { http } from './http'
import type { ITarefas } from '../types/ITarefas'


export const TarefaService = {
    // listar todas as tarefas
    async getAll(): Promise<ITarefas[]>{
        const response = await http.get('/tarefa')
        return response.data
    },

    // Busca um produto por ID
    async getById(id:string): Promise<ITarefas>{
        const response = await http.get(`/tarefa/${id}`)
        return response.data
    }
}