import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import 'virtual:uno.css'
// import '@unocss/reset/normalize.css'
import './index.css'

createApp(App)
  .use(router)
  .mount('#app')
