<template>
  <v-container
    class="fill-height"
    fluid
    style="display: flex; align-items: center; justify-content: center;"
  >
    <v-card>
      <v-card-text class="text-center">
        <v-progress-circular indeterminate color="primary"></v-progress-circular>
        <div class="mt-4">正在处理认证，请稍候...</div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { handleCallback } from '@/plugins/casdoor';

// 页面加载时处理认证回调
onMounted(() => {
  handleCallback();
});
</script>