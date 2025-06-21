<template>
  <v-container class="py-10" max-width="1000">
    <h1 class="text-h4 font-weight-bold mb-8 text-center">开源项目</h1>
    <v-row>
      <v-col
        v-for="repo in repos"
        :key="repo.id"
        cols="12"
        sm="6"
        md="4"
        class="d-flex"
      >
        <v-card class="flex-grow-1" color="surface-variant" rounded="lg" variant="tonal">
          <v-card-title class="d-flex align-center">
            <v-icon class="mr-2">mdi-github</v-icon>
            <span class="text-h6 font-weight-bold">{{ repo.name }}</span>
          </v-card-title>
          <v-card-text>
            <div class="mb-2 text-body-2" v-if="repo.description">{{ repo.description }}</div>
            <div class="mb-2 text-caption grey--text">更新时间：{{ formatDate(repo.updated_at) }}</div>
            <div class="mb-2 text-caption">最新构建：<span v-if="repo.latestRelease">{{ repo.latestRelease }}</span><span v-else>—</span></div>
          </v-card-text>
          <v-card-actions>
            <v-btn :href="repo.html_url" target="_blank" color="primary" variant="text" prepend-icon="mdi-link">
              查看仓库
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-if="loading">
      <v-col cols="12" class="text-center">
        <v-progress-circular indeterminate color="primary" size="48" />
      </v-col>
    </v-row>
    <v-row v-if="!loading && repos.length === 0">
      <v-col cols="12" class="text-center grey--text">网络访问错误，您可以尝试<a href="https://github.com/ris-soft" about="_blank">直接打开Github</a></v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Repo {
  id: number
  name: string
  description: string
  html_url: string
  updated_at: string
  latestRelease?: string
}

const repos = ref<Repo[]>([])
const loading = ref(true)

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  return d.toLocaleString('zh-CN', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' })
}

async function fetchRepos() {
  loading.value = true
  try {
    const res = await fetch('https://api.github.com/users/ris-soft/repos?per_page=100&sort=updated')
    const data = await res.json()
    // 获取每个仓库的最新 release 版本号（如有）
    const repoList: Repo[] = await Promise.all(
      data.map(async (repo: any) => {
        let latestRelease = ''
        try {
          const relRes = await fetch(`https://api.github.com/repos/ris-soft/${repo.name}/releases/latest`)
          if (relRes.status === 200) {
            const relData = await relRes.json()
            latestRelease = relData.tag_name || relData.name || ''
          }
        } catch (e) {
          // 忽略 release 错误
        }
        return {
          id: repo.id,
          name: repo.name,
          description: repo.description,
          html_url: repo.html_url,
          updated_at: repo.updated_at,
          latestRelease: latestRelease || undefined,
        }
      })
    )
    repos.value = repoList
  } catch (e) {
    repos.value = []
  } finally {
    loading.value = false
  }
}

onMounted(fetchRepos)
</script>
