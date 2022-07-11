import { createApp } from 'vue'
import { store } from './store'
import App from './app'
const app  = createApp(App);
app.use(store);
app.mount('#app')
