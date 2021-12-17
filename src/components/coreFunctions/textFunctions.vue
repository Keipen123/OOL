<template>
    <div class="textbox whiteFontColor" @click="arrayContentCensor">
        <h2 class="cinecaption typewriterMotion blinker">{{displayedText}}</h2>
        <!-- <button @click="incrementingArrayCounter">UP</button> -->
    </div>
    <!-- <button @click="logger">logger</button> -->
</template>

<script>
export default {
    data(){
        return{
            displayedText:'クリック'
        }
    },
    computed:{
        partNumber(){
            return this.$store.state.database.partNumber
        },
        theText(){
            return this.$store.state.database.textDialogue[this.partNumber][this.theArrayCounter]
        },
        userChoice(){
            return this.$store.state.database.userChoice
        },
        theArrayCounter(){
            return this.$store.state.database.arrayCounter
        }
    },
    methods:{
        logger(){
            console.log('part number' + this.partNumber)
        },
        incrementingArrayCounter(){
            return this.$store.commit('incrementArrayCounter'), console.log(this.theArrayCounter)
        },
        arrayContentCensor(){
            const subjectArray = this.theText;
            this.incrementingArrayCounter();
            console.log('subjectArray: '+ subjectArray)

            if(subjectArray >= 0 && subjectArray != null){

                const numberCode = subjectArray
                console.log('number');
                return this.$store.commit('centralVerifier', numberCode)

            } else if(subjectArray === null) {

                this.displayedText = ''
                console.log('nulled displayedText:' + this.displayedText)
                
            }else{
                this.displayedText = subjectArray
                console.log('displayedText:' + this.displayedText)
            }return this.displayedText
        }
    }
}
</script>