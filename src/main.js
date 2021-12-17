import { createApp } from 'vue'
import {createStore} from 'vuex'
import router from './router'
import App from './App.vue'
import database from './stores/vuexDatabase/index.js'
import textFunctions from './components/coreFunctions/textFunctions.vue'

import '@/style.css'

const store = createStore({
    modules:{
        database
    }
})

const app = createApp(App);

app.component('text-functions', textFunctions)

app.use(router);
app.use(store);
app.mount('#app');
