import {createRouter, createWebHistory} from 'vue-router'
import GameScreen from './components/pages/gameScreen.vue'
import OpenScreen from './components/pages/openScreen.vue'
import ErrorScreen from './components/pages/errorScreen.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path:'/', redirect: '/open'},
        {path:'/open', component:OpenScreen},
        {path:'/game', component:GameScreen},
        {path:'/:theHallOfVoid.*)', component:ErrorScreen}
    ]
    })

export default router;