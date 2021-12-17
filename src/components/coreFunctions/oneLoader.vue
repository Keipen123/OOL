<template>
    <transition name="fade"><img v-if="oneActivated" :src="oneImage" class="centerFrontPosition"></transition>
</template>

<script>
export default {
    computed:{
        lovePoint(){
            return this.$store.state.database.lovePoint
        },
        oneImage(){
            return require("@/assets/images/ONE/" + this.oneCodeComputated + ".png")
        },
        oneCode(){
            console.log('one Code loaded: ' + this.$store.state.database.oneCode)
            return this.$store.state.database.oneCode
        },
        oneCodeComputated(){
            return this.oneCode + this.lovePoint*10
        },
        oneActivated(){
            console.log('one Activated: ' + this.$store.state.database.oneStatus)
            return this.$store.state.database.oneStatus
        },
        // centerPositionOne(){
        //     return this.$store.state.database.centerPosition
        // }
    }
}
</script>