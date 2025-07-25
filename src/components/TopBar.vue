<template>
    <v-app-bar app>
        <v-app-bar-nav-icon class="ml-1" @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-img src="/favicon.ico" alt="Logo" max-width="32" class="ml-1" contain></v-img>
        <v-toolbar-title>腾瑞思智</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn v-for="item in menuItems" @click="handleMenuClick(item)" icon class="mx-1 mr-1" :title="item.title">
    <v-icon>{{ item.icon }}</v-icon>
</v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app>
        <v-list nav activatable>
            <v-list-item :to="'/'" link title="官网首页" prepend-icon="mdi-home-outline"></v-list-item>
            <v-list-item :to="'/projects'" link title="项目列表" prepend-icon="mdi-view-list-outline"></v-list-item>
            <v-list-item :to="'/docs'" link title="文档中心" prepend-icon="mdi-file-document-outline"></v-list-item>
            <v-list-item v-if="appStore.accessToken" :to="'/user'" link title="用户系统" prepend-icon="mdi-account-outline"></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useAppStore } from '@/stores/app';
import { login, logout } from '@/plugins/casdoor';
import { useRouter } from 'vue-router';

const appStore = useAppStore();
const router = useRouter();
let drawer = ref(true);

// 根据登录状态显示不同菜单项
const menuItems = computed(() => [
  { title: '文档中心', link: 'https://docs.3r60.top', icon: 'mdi-help-circle-outline' },
  ...(appStore.accessToken ? [
    { title: '用户中心', link: '/user', icon: 'mdi-account-circle' },
    { title: '退出登录', action: 'logout', icon: 'mdi-logout' }
  ] : [
    { title: '登录', action: 'login', icon: 'mdi-login' }
  ])
]);

// 处理菜单点击事件
function handleMenuClick(item: any) {
  if (item.action === 'login') {
    login();
  } else if (item.action === 'logout') {
    logout();
  } else if (item.link) {
    if (item.link.startsWith('/')) {
      router.push(item.link);
    } else {
      window.open(item.link, '_blank');
    }
  }
}
</script>