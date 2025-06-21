<template>
  <v-container class="py-8" fluid>
    <v-row justify="center">
      <v-col cols="12">
        <v-card elevation="3" style="height: 90vh;">
          <v-card-title class="d-flex justify-space-between align-center">
            <span>文档中心</span>
            <v-btn
              color="primary"
              variant="elevated"
              href="https://docs.3r60.top/"
              target="_blank"
              rel="noopener"
              prepend-icon="mdi-open-in-new"
            >
              新窗口打开
            </v-btn>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text style="height: calc(100% - 112px); padding: 0;">
            <iframe
              src="https://docs.3r60.top/"
              style="width:100%; height:100%; border:0;"
              title="项目文档"
              loading="lazy"
            ></iframe>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>