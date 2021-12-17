<template>
    <little-screen></little-screen>
    <modal-screen></modal-screen>
    <div class="screen" :style="{backgroundImage: `url(${bgImage})`}" style="background-size: cover">
        <one-loader></one-loader>
        <character-loader></character-loader>
        <text-functions></text-functions>
    </div>
</template>

<script>

import oneLoader from '../coreFunctions/oneLoader.vue'
import characterLoader from '../coreFunctions/characterLoader.vue'
import modalScreen from './modalScreen.vue'
import littleScreen from './littleScreen.vue'

export default {
    components:{

        oneLoader,
        characterLoader,
        modalScreen,
        littleScreen
    },   
    computed:{
        bgStatus(){
            console.log('gameScreen: ' + this.$store.state.database.bgStatus)
            return this.$store.state.database.bgStatus
        },
        bgCode(){
            console.log('gameScreen: ' + this.$store.state.database.bgCode)
            return this.$store.state.database.bgCode
        },
        bgImage(){
            if(this.bgStatus == true){
                return require("@/assets/images/backgrounds/" + this.bgCode + ".jpg")
            } else {
                console.log('bgStatus in condition: ' + this.bgStatus)
                return null
            }
        }
    },
}
</script>