import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from '../src/router/Routes.js'
import  {store}  from './store/Store'
import VueCookie from 'vue-cookies' 

loadFonts()

createApp(App)
  .use(vuetify)
  .use(router)
  .use(VueCookie)
  .use(store)
  .mount('#app')
  
  
  