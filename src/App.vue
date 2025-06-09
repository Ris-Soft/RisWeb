<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify'
import { useRouter, useRoute } from 'vue-router'

const theme = useTheme()
const isDark = ref(theme.global.current.value.dark)
const toggleTheme = () => {
  theme.global.name.value = isDark.value ? 'light' : 'dark'
  isDark.value = !isDark.value
}
const router = useRouter()
const route = useRoute()
const navItems = [
  { title: '首页', to: '/' },
  { title: '项目', to: '/project' },
  { title: '文档', to: '/docs' },
  { title: '关于', to: '/about' },
]
</script>

<template>
  <v-app>
    <v-app-bar flat color="surface" elevation="2">
      <v-toolbar-title class="font-weight-bold">美观模板</v-toolbar-title>
      <v-spacer />
      <v-btn-toggle class="me-2" mandatory>
        <v-btn v-for="item in navItems" :key="item.to" :to="item.to" variant="text"
          :color="route.path === item.to ? 'primary' : 'default'" class="text-none" router>
          {{ item.title }}
        </v-btn>
      </v-btn-toggle>
      <v-divider vertical class="mx-4" />
      <v-btn icon @click="toggleTheme" class="me-2">
        <v-icon class="mdi" v-text="isDark ? 'mdi-white-balance-sunny' : 'mdi-weather-night'" />
      </v-btn>
      <v-btn color="primary" variant="flat">登录</v-btn>
    </v-app-bar>
    <v-main class="main-scrollable">
      <router-view />
    </v-main>
  </v-app>
</template>

<style scoped>
.main-scrollable {
  min-height: 100vh;
  overflow-y: auto;
  background: var(--v-theme-background);
}
</style>
