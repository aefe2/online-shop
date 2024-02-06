<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HeaderItem from "@/components/HeaderItem.vue";
import LoginView from "@/views/LoginView.vue";
</script>

<template>
  <HeaderItem/>
  <LoginView/>
  <RouterView />
</template>

<style scoped>

</style>
