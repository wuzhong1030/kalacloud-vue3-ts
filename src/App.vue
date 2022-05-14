<template>
  <div class="wrapper">
    <h2>「卡拉云 - 极速搭建企业内部工具，十倍提升开发效率」</h2>
    <Todo />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Todo from './components/Todo.vue'

export default defineComponent({
  name: 'TodoApp',
  components: {
    Todo
  }
})
</script>

<style>
.wrapper {
  width: 600px;
  margin: 60px auto 0;
}
</style>
