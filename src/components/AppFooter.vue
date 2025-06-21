<template>
  <v-footer app height="auto">
    <v-container fluid class="pa-0">
      <v-row align="center" no-gutters>
        <v-col class="d-flex align-center" cols="12" md="auto">
          <div>
            <a v-for="item in items" :key="item.title" class="d-inline-block mx-2 social-link" :href="item.href"
              rel="noopener noreferrer" target="_blank" :title="item.title">
              <v-icon :icon="item.icon" :size="item.icon === '$vuetify' ? 24 : 16" />
            </a>
          </div>
        </v-col>
        <v-col class="text-caption text-disabled text-wrap" cols="12" md>
          <div class="d-flex flex-wrap justify-end" style="gap: 8px;">
            <a href="https://beian.miit.gov.cn/" class="text-disabled">陕ICP备2024024321号-4</a>
            <a href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=61040202000101"
              class="text-disabled">陕公网安备61019002003234号</a>
            <a href="https://docs.3r60.top/article/sqjzx19c/" class="text-disabled">用户协议</a>
            <span>
              &copy; 2022-{{ (new Date()).getFullYear() }}
              <span class="d-none d-sm-inline-block">腾瑞思智 | RisSoft</span>
            </span>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
const items = [
  {
    title: '文档',
    icon: 'mdi-file-document-outline',
    href: 'https://docs.3r60.top',
  },
  {
    title: 'GitHub',
    icon: 'mdi-github',
    href: 'https://github.com/ris-soft',
  },
  {
    title: 'QQ',
    icon: 'mdi-qqchat',
    href: 'https://qm.qq.com/q/3swohB3zsQ',
  },
  {
    title: 'Bilibili',
    icon: 'mdi-television-play',
    href: 'https://space.bilibili.com/1481617182',
  },
]
</script>

<style scoped lang="sass">
  .social-link :deep(.v-icon)
    color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity))
    text-decoration: none
    transition: .2s ease-in-out

    &:hover
      color: rgba(25, 118, 210, 1)
</style>
