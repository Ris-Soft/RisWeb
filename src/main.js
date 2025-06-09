import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import router from './router'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi },
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#7C4DFF',
          surface: '#FAFAFA',
          background: '#F5F7FA',
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: '#7C4DFF',
          surface: '#232526',
          background: '#232526',
        },
      },
    },
  },
})

createApp(App)
  .use(vuetify)
  .use(router)
  .mount('#app')
