<template>
<transition name="fade">
    <div v-if="littleStatus">
        <div class="modalBackground"></div>
        <dialog open class="window">
           <div class="screen" :style="{backgroundImage: `url(${bgImage})`}" style="background-size: cover">
               <text-functions></text-functions>
           </div>
        </dialog>
    </div>
</transition>
</template>

<script>

export default {
    computed:{
        bgImage(){
                return require("@/assets/images/backgrounds/115.jpg")
        },
        littleStatus(){
            return this.$store.state.database.littleStatus
        }
    }
}
</script>