<template>
  <v-container class="fill-height d-flex align-center justify-center" max-width="700">
    <v-card class="mt-10" max-width="500" width="100%">
      <v-card-title class="text-h5 text-center">
        用户信息
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-row v-if="hasAccessToken" align="center" class="mb-4 justify-center">
          <v-col cols="12" md="12" class="text-center d-flex flex-column align-center justify-center pb-md-0 pb-4">
            <v-avatar size="96" class="mx-auto mb-2 mb-md-3">
              <v-img v-if="user && user.avatar" :src="user.avatar" alt="已登录用户"></v-img>
            </v-avatar>
            <template v-if="loading">
              <v-progress-circular indeterminate size="40"></v-progress-circular>
              <p class="mt-2">加载用户信息中...</p>
            </template>
            <template v-else-if="error">
              <v-alert type="error" dense>{{ error }}</v-alert>
            </template>
            <template v-else-if="user">
              <div class="mb-1 text-h6 font-weight-bold">{{ user.name }}</div>
              <div class="text-body-2 text-grey">{{ user.email }}</div>
              <div class="text-caption text-grey mt-4">
                用户名: {{ user.owner }} | 注册时间: {{ user.createdTime }} 
              </div>
            </template>
            <template v-else>
              <div class="mb-1 text-h6 font-weight-bold">已登录用户</div>
              <div class="text-body-2 text-grey">使用访问令牌进行授权</div>
            </template>
            <v-btn color="primary" variant="elevated" @click="gotoCasdoorProfile" class="mt-6">编辑个人信息</v-btn>
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
import { ref, onMounted, computed, watch } from 'vue';
import { useAppStore } from '@/stores/app';
import { login, getUserInfoFromToken, casdoorConfig } from '@/plugins/casdoor';

const appStore = useAppStore();

const gotoCasdoorProfile = () => {
  if (user.value) {
    const profileUrl = `${casdoorConfig.serverUrl}/account/${user.value.id}`;
    window.location.href = profileUrl;
  }
};
const hasAccessToken = computed(() => !!appStore.accessToken);
const user:any = ref(null);
const loading = ref(true);
const error = ref(null);

const fetchUserInfo = async () => {
  if (hasAccessToken.value) {
    loading.value = true;
    try {
      // 使用casdoor.ts中的方法从token解析用户信息
      user.value = appStore.accessToken ? getUserInfoFromToken(appStore.accessToken) : null;
      console.log(user.value)
      if (!user.value) {
        // 使用浏览器原生弹窗提示无法从令牌中获取用户信息
        window.alert('无法从令牌中获取用户信息');
      }
    } catch (err) {
      // 使用浏览器原生弹窗提示解析令牌失败
      window.alert('解析令牌失败，请重新登录');
      console.error('Failed to parse token:', err);
    } finally {
      loading.value = false;
    }
  }
};

onMounted(fetchUserInfo);
watch(hasAccessToken, fetchUserInfo);
</script>
