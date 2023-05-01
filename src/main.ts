import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router.ts'

import Antd from './plugins/antd.ts'
import Locale from './plugins/locale.ts'

createApp(App)
  .use(router)
  .use(Antd)
  .use(Locale)
  .mount('#app')
