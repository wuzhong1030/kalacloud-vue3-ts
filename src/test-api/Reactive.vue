<template>
  <div>
    <h2>reactive 基本使用方法</h2>
    <h2>{{ info.name }} - {{ info.en }}</h2>
    <h3>{{ info.desc }}</h3>
    <button @click="updateDesc">update desc</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'Setup',
  setup () {
    const info = reactive({ name: '卡拉云', en: 'kalacloud', desc: '' })

    const updateDesc = () => {
      info.desc = '「卡拉云 - 极速搭建企业内部工具，十倍提升开发效率」'
    }

    return {
      info,
      updateDesc
    }
  }
})
</script>
