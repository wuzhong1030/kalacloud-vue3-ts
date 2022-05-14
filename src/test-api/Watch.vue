<template>
  <div>
    <h2>watch 基本使用方法</h2>
    <h3>「卡拉云 - 极速搭建企业内部工具，十倍提升开发效率」</h3>
    <h2>{{ counter }}</h2>
    <button @click="add">+</button>
    <button @click="minus">-</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  name: 'Setup',
  setup (props, context) {
    console.log(props, context)
    const counter = ref(0)

    const add = () => {
      counter.value = counter.value + 1
    }

    const minus = () => {
      counter.value = counter.value - 1
    }

    watch(counter, (newValue, oldValue) => {
      console.log('counter 发生了变化，最新的值是：', newValue)
    })

    return {
      counter,
      add,
      minus
    }
  }
})
</script>
