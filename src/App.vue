<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HeaderItem from "@/components/HeaderItem.vue";
import LoginView from "@/views/LoginView.vue";
</script>

<template>
  <HeaderItem/>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>

</style>
