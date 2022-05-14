<template>
  <todo-list
    v-for="todo in todos"
    :todo="todo"
    :key="todo.id"
    @toggle="toggleTodo"
    @remove="removeTodo"
  />
  <add-todo
    @add="addTodo"
  />
</template>

<script lang="ts">
import { defineComponent, watchEffect, ref } from 'vue'
import TodoList from './TodoList.vue'
import AddTodo from './AddTodo.vue'
import todoAction from '../utils/todoAction'
import { Todo } from '../types/todo'

const initialTodos: Todo[] = [
  {
    id: 1,
    title: '使用卡拉云创建表单',
    done: false
  },
  {
    id: 2,
    title: '使用卡拉云创建图表',
    done: false
  },
  {
    id: 3,
    title: '使用卡拉云创建应用',
    done: false
  }
]

export default defineComponent({
  components: {
    TodoList,
    AddTodo
  },
  setup () {
    const todos = ref<Todo[]>(initialTodos)
    const { addTodo, removeTodo, toggleTodo } = todoAction(todos)

    return {
      todos,
      addTodo,
      removeTodo,
      toggleTodo
    }
  }
})
</script>
