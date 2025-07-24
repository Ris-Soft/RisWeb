<template>
  <v-container class="fill-height d-flex align-center justify-center" max-width="700">
    <v-card class="mt-10" max-width="500" width="100%">
      <v-card-title class="text-h5 text-center">
        用户信息
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-row v-if="user" align="center" class="mb-4">
          <v-col cols="12" md="4" class="text-center d-flex flex-column align-center justify-center pb-md-0 pb-4">
            <v-avatar size="96" class="mx-auto mb-2 mb-md-3">
              <v-img :src="user.avatar || 'https://api.dicebear.com/7.x/identicon/svg?seed=' + (user.username || 'user')" alt="用户头像"></v-img>
            </v-avatar>
            <div class="mb-1 text-h6 font-weight-bold">{{ user.name || user.username }}</div>
            <div class="text-body-2 text-grey">{{ user.email || '未设置邮箱' }}</div>
          </v-col>
          <v-col cols="12" md="8" class="d-flex flex-column justify-center">
            <v-list density="compact" class="mb-2">
              <v-list-item>
                <v-list-item-icon><v-icon>mdi-account</v-icon></v-list-item-icon>
                <v-list-item-content>用户名: {{ user.username }}</v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon><v-icon>mdi-at</v-icon></v-list-item-icon>
                <v-list-item-content>邮箱: {{ user.email || '未设置' }}</v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon><v-icon>mdi-calendar</v-icon></v-list-item-icon>
                <v-list-item-content>创建时间: {{ formatDate(user.createdAt) || '未知' }}</v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon><v-icon>mdi-shield</v-icon></v-list-item-icon>
                <v-list-item-content>角色: {{ user.role || '普通用户' }}</v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon><v-icon>mdi-key</v-icon></v-list-item-icon>
                <v-list-item-content>授权范围: {{ user.scope || 'read' }}</v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon><v-icon>mdi-clock-outline</v-icon></v-list-item-icon>
                <v-list-item-content>最后登录: {{ formatDate(user.lastLogin) || '从未登录' }}</v-list-item-content>
              </v-list-item>
            </v-list>
            <div class="mt-2 text-body-1 text-grey-darken-1">{{ user.bio || '暂无个人简介' }}</div>
          </v-col>
        </v-row>

        <v-alert v-else color="warning" class="mt-8 text-center">
          <v-icon class="mr-2">mdi-information</v-icon>
          <span>您尚未登录，请先登录</span>
          <v-btn class="ml-4" color="primary" variant="elevated" @click="login">立即登录</v-btn>
        </v-alert>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useAppStore } from '@/stores/app';
import { login } from '@/plugins/casdoor';

const appStore = useAppStore();
const user = computed(() => appStore.user);

// 格式化日期
const formatDate = (dateString?: string) => {
  if (!dateString) return null;
  const date = new Date(dateString);
  return date.toLocaleString();
};
</script>
