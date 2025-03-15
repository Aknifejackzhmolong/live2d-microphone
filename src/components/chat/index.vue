<template>
    <div>
      <heads/>
      <chat-list ref="containerRef"/>
      <live2d ref="live2dRef"/>
    </div>
</template>

<script setup>
import { onMounted,ref } from 'vue';
import Heads from './Heads.vue';
import ChatList from './ChatList.vue';
import live2d from './Live2DView.vue';

const containerRef = ref(null);
const live2dRef = ref(null);
onMounted(()=>{
  live2dRef.value.init(containerRef.value);
})
</script>

<style scoped>

</style>
