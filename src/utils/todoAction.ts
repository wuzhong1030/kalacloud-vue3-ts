import { Ref } from 'vue'
import { Todo } from '@/types/todo'

export default (todos: Ref<Todo[]>) => {
  const addTodo = (title: string) => {
    todos.value = [...todos.value, {
      id: todos.value.length + 1,
      title,
      done: false
    }]
  }

  const removeTodo = (id: number) => {
    todos.value = todos.value.filter(todo => todo.id !== id)
  }

  const toggleTodo = (id: number) => {
    const todo = todos.value.find(todo => todo.id === id)
    if (!todo) return
    todo.done = !todo.done
  }

  return {
    addTodo,
    removeTodo,
    toggleTodo
  }
}
