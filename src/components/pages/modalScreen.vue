<template>
<transition name="fade">
    <div v-if="modalStatus">
        <div class="modalBackground"></div>
        <dialog open class="question">
            <h1 class="theQuestion">{{choiceList[1]}}</h1>
            <ul>
                <button v-for="n in 6" :key="n" @click="choiceSelection" :id="n" class="option">
                    {{choiceList[n+1]}}
                </button>
            </ul>
        </dialog>
    </div>
</transition>
</template>

<script>
export default {
    data(){
        return{
            buttonId:null,
            questionNumber:null,
            theQuestionNumber:0
        }
    },
    computed:{
        choiceList(){
            console.log('choicelist: '+ this.$store.state.database.choiceOptions)
            return this.$store.state.database.choiceOptions[this.theQuestionNumber]
        },
        modalStatus(){
            return this.$store.state.database.modalStatus
        }
    },
    methods:{
        choiceSelection(event){
        let buttonId = event.target.id;
        console.log('buttonId: ' + buttonId)
        this.buttonId = buttonId

        this.questionNumber = this.choiceList[0]
        this.theQuestionNumber++

        this.selectionId = [this.questionNumber, this.buttonId]
        console.log("selection Id: " + this.selectionId)

        return this.$store.commit('choiceHandler', this.selectionId), this.$store.commit('openRoute')
        },
    }
}
</script>