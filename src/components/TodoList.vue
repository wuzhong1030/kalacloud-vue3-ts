<template>
  <div class="todo-item">
    <el-checkbox v-model="todo!.done" />
    <el-alert class="alert" :title="todo!.title" :type="todo!.done ? 'success' : 'warning'" :closable="false" />
    <el-button type="danger" @click="remove">删除</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Todo } from '../types/todo'

export default defineComponent({
  props: {
    todo: {
      type: Object as PropType<Todo>
    }
  },
  emits: ['toggle', 'remove'],
  setup (props, context) {
    const toggle = () => {
      context.emit('toggle', props.todo!.id)
    }

    const remove = () => {
      context.emit('remove', props.todo!.id)
    }

    return {
      toggle,
      remove
    }
  }
})
</script>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.alert {
  margin: 0 20px;
}
</style>
