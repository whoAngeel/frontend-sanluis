import { createApp } from 'vue'
import './style.css'
import { router } from "./routes/index";
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)
import App from './App.vue'

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
