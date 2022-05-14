<template>
  <div>
    <h2>computed 基本使用方法</h2>
    <h3>「卡拉云 - 极速搭建企业内部工具，十倍提升开发效率」</h3>
    <h2>{{ info }}</h2>
    <button @click="update">update</button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref } from 'vue'

export default defineComponent({
  name: 'Setup',
  setup () {
    const prefix = ref('')
    const msg = reactive({ name: '卡拉云' })

    const info = computed(() => prefix.value + msg.name)

    const update = () => {
      prefix.value = 'kalacloud - '
    }

    return {
      info,
      update
    }
  }
})
</script>
