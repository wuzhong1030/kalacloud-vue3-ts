<template>
  <div class="add-todo">
    <el-input type="text" v-model="state.inputValue" />
    <el-button @click="onClick" class="add-button" type="primary">添加</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, watchEffect } from 'vue'

interface State {
  inputValue: string;
}
export default defineComponent({
  emits: ['add'],
  setup (_, context) {
    const state = reactive<State>({
      inputValue: ''
    })

    const onClick = () => {
      context.emit('add', state.inputValue)
      state.inputValue = ''
    }

    return {
      state,
      onClick
    }
  }
})
</script>

<style scoped>
.add-todo {
  display: flex;
}
.add-button {
  margin-left: 20px;
}
</style>
