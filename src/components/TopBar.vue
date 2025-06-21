<template>
    <v-app-bar app>
        <v-app-bar-nav-icon class="ml-1" @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-img src="/favicon.ico" alt="Logo" max-width="32" class="ml-1" contain></v-img>
        <v-toolbar-title>腾瑞思智</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn v-for="item in menuItems" @click="openLink(item.link)" icon class="mx-1 mr-1" :title="item.title"
            target="_blank">
            <v-icon>{{ item.icon }}</v-icon>
        </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app>
        <v-list nav activatable>
            <v-list-item :to="'/'" link title="官网首页" prepend-icon="mdi-home-outline"></v-list-item>
            <v-list-item :to="'/projects'" link title="项目列表" prepend-icon="mdi-view-list-outline"></v-list-item>
            <v-list-item :to="'/docs'" link title="文档中心" prepend-icon="mdi-file-document-outline"></v-list-item>
            <v-list-item link title="用户系统" prepend-icon="mdi-account-outline" @click="openLink('https://user.3r60.top')"></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

let drawer = ref(true);

const menuItems = ref([
    { title: '', link: 'https://docs.3r60.top', icon: 'mdi-help-circle-outline' },
    { title: '', link: 'https://user.3r60.top', icon: 'mdi-login' }
])

function openLink(link: string) {
    window.open(link, '_blank')
}  
</script>