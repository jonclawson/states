import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { fetchTodos, addTodo } from '../lib/api'

export const useTodos = () => {
  return useQuery({ queryKey: ['todos'], queryFn: fetchTodos })
}

export const useAddTodo = () => {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: (title: string) => addTodo({ title }),
    onMutate: async (title: string) => {
      await qc.cancelQueries({ queryKey: ['todos'] })
      const previous = qc.getQueryData<any[]>(['todos'])
      qc.setQueryData(['todos'], (old: any[] = []) => [{ id: 'temp-' + Date.now(), title, completed: false }, ...old])
      return { previous }
    },
    onError: (_err, _newTodo, context: any) => {
      if (context?.previous) qc.setQueryData(['todos'], context.previous)
    },
    onSettled: () => {
      qc.invalidateQueries({ queryKey: ['todos'] })
    }
  })
}
