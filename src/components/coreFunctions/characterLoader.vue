<template>
    <transition name="fade">
        <img v-if="characterActivated" :src="characterImage" class="centerFrontPosition">
    </transition>
</template>

<script>
export default {
    computed:{
        characterImage(){
            return require("@/assets/images/characters/" + this.characterCode + ".png")
        },
        characterCode(){
            console.log('character Code loaded: ' + this.$store.state.database.characterCode)
            return this.$store.state.database.characterCode
        },
        characterActivated(){
            console.log('character Activated: ' + this.$store.state.database.characterStatus)
            return this.$store.state.database.characterStatus
        },
        // centerPositionCharacter(){
        //     return this.$store.state.database.centerPosition
        // }
    }
}
</script>