<template>
  <v-container class="fill-height" max-width="900">
    <div>
      <!-- Logo & Studio Name -->
      <v-row align="center" class="mb-6" style="margin-top: 10vh">
        <v-col cols="auto">
          <v-img class="mr-4" height="80" width="80" src="@/assets/logo.png" alt="Studio Logo" rounded="circle" />
        </v-col>
        <v-col>
          <h1 class="text-h3 font-weight-bold mb-1">腾瑞思智</h1>
          <div class="text-subtitle-1 font-weight-light">科技 研究 解决 空间</div>
        </v-col>
      </v-row>

      <!-- Welcome Card -->
      <v-card class="mb-8" color="surface-variant" rounded="lg" variant="tonal">
        <v-row no-gutters>
          <v-col cols="12" md="8" class="pa-6">
            <h2 class="text-h5 font-weight-bold mb-2">欢迎来到腾瑞思智工作室</h2>
            <div class="text-body-1 mb-4">
              我们专注于程序设计与前端开发。以创新为驱动。
            </div>
            <v-btn color="primary" size="large" href="#contact" rounded>
              联系我们
            </v-btn>
            <v-btn class="ml-5" size="large" :to="{ path: '/projects' }" rounded>
              开源项目
            </v-btn>
          </v-col>
        </v-row>
      </v-card>

      <!-- Services -->
      <h2 class="text-h5 font-weight-bold mb-4 text-center">我们的服务</h2>
      <v-row>
        <v-col v-for="service in services" :key="service.title" cols="12" md="4">
          <v-card class="py-6 px-4" color="surface-variant" rounded="lg" variant="tonal">
            <v-icon size="36" color="primary" class="mb-3">{{ service.icon }}</v-icon>
            <h3 class="text-h6 font-weight-bold mb-2">{{ service.title }}</h3>
            <div class="text-body-2">{{ service.desc }}</div>
          </v-card>
        </v-col>
      </v-row>

      <!-- About & Contact -->
      <v-row class="mt-10">
        <v-col cols="12" md="6">
          <v-card color="surface-variant" rounded="lg" variant="tonal" class="pa-6">
            <h2 class="text-h6 font-weight-bold mb-2">关于我们</h2>
            <div class="text-body-2">
              腾瑞思智目前仅有几个学生组成，致力于为提供一站式数字化服务。我们相信每一个项目都值得被用心打造。
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" id="contact">
          <v-card color="surface-variant" rounded="lg" variant="tonal" class="pa-6">
            <h2 class="text-h6 font-weight-bold mb-2">联系我们</h2>
            <div class="text-body-2 mb-2">
              邮箱：<a href="mailto:info@studio.com">e-pylxu@outlook.com</a><br>
              群聊：<a href="https://qm.qq.com/q/3swohB3zsQ" target="_blank">939571490</a><br>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script setup lang="ts">
const services = [
  {
    icon: 'mdi-web',
    title: '在线服务开发',
    desc: '提供方便快捷的在线服务。',
  },
  {
    icon: 'mdi-palette-outline',
    title: '大屏解决方案',
    desc: '一体机互动交互方案设计。',
  },
  {
    icon: 'mdi-cellphone-link',
    title: '桌面应用开发',
    desc: '以WebUI+Node为核心的应用开发。',
  },
]
</script>
