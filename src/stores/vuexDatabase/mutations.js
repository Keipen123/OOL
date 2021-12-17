export default{
    
    incrementArrayCounter(state){

        state.arrayCounter ++

    },

    openRoute(state){

        state.littleStatus = true
        state.modalStatus = false

    },

    choiceHandler(state,selectionId){


        state.userChoice = selectionId

        console.log("user's choice: " + state.userChoice)


        if(state.userChoice.toString() == "1,1"){

            console.log('stringifying array and evaluating!')

            state.partNumber = 6

            state.friendPoint++
            state.lovePoint++

            console.log('part number: ' + state.partNumber)
        }
        else if(state.userChoice.toString() == "1,2"){

            console.log('stringifying array and evaluating!')

            state.partNumber = 7

            state.friendPoint++

            console.log('part number: ' + state.partNumber)
        }
        else if(state.userChoice.toString() == "1,3"){

            console.log('stringifying array and evaluating!')

            state.partNumber = 8

            console.log('part number: ' + state.partNumber)
        }
        else if(state.userChoice.toString() == "1,4"){

            console.log('stringifying array and evaluating!')

            state.partNumber = 9

            state.lovePoint++

            console.log('part number: ' + state.partNumber)
        }
        else if(state.userChoice.toString() == "2,1"){

            console.log('stringifying array and evaluating!')

            state.partNumber = 10

            state.lovePoint++

            console.log('part number: ' + state.partNumber)
        }
        else if(state.userChoice.toString() == "2,2"){

            console.log('stringifying array and evaluating!')

            state.partNumber = 11

            console.log('part number: ' + state.partNumber)
        }
        else if(state.userChoice.toString() == "2,3"){

            console.log('stringifying array and evaluating!')

            state.partNumber = 12

            state.friendPoint++
            state.lovePoint++

            console.log('part number: ' + state.partNumber)
        }
        else if(state.userChoice.toString() == "2,4"){

            console.log('stringifying array and evaluating!')

            state.partNumber = 13

            state.friendPoint++

            console.log('part number: ' + state.partNumber)
        }
        else if(state.userChoice.toString() == "3,1"){

            console.log('stringifying array and evaluating!')

            state.partNumber = 14

            state.friendPoint++

            console.log('part number: ' + state.partNumber)
        }
        else if(state.userChoice.toString() == "3,2"){

            console.log('stringifying array and evaluating!')

            state.partNumber = 15

            state.friendPoint++
            state.lovePoint++

            console.log('part number: ' + state.partNumber)
        }
        else if(state.userChoice.toString() == "3,3"){

            console.log('stringifying array and evaluating!')

            state.partNumber = 16

            state.lovePoint++

            console.log('part number: ' + state.partNumber)
        }
        else if(state.userChoice.toString() == "3,4"){

            console.log('stringifying array and evaluating!')

            state.partNumber = 17

            console.log('part number: ' + state.partNumber)
        }
        else if(state.userChoice.toString() == "4,1"){

            console.log('stringifying array and evaluating!')

            state.partNumber = 18

            console.log('part number: ' + state.partNumber)
        }
        else if(state.userChoice.toString() == "4,2"){

            console.log('stringifying array and evaluating!')

            state.partNumber = 19

            state.friendPoint++

            console.log('part number: ' + state.partNumber)
        }
        else if(state.userChoice.toString() == "4,3"){

            console.log('stringifying array and evaluating!')

            state.partNumber = 20

            state.lovePoint++

            console.log('part number: ' + state.partNumber)
        }
        else if(state.userChoice.toString() == "4,4"){

            console.log('stringifying array and evaluating!')

            state.partNumber = 21

            state.friendPoint++
            state.lovePoint++

            console.log('part number: ' + state.partNumber)
        }
        else if(state.userChoice.toString() == "5,1"){

            console.log('stringifying array and evaluating!')

            state.partNumber = 22

            state.friendPoint++
            state.lovePoint++

            console.log('part number: ' + state.partNumber)
        }
        else if(state.userChoice.toString() == "5,2"){

            console.log('stringifying array and evaluating!')

            state.partNumber = 23

            console.log('part number: ' + state.partNumber)
        }
        else if(state.userChoice.toString() == "5,3"){

            console.log('stringifying array and evaluating!')

            state.partNumber = 24

            console.log('part number: ' + state.partNumber)
        }
        else if(state.userChoice.toString() == "5,4"){

            console.log('stringifying array and evaluating!')

            state.partNumber = 25

            state.friendPoint++

            console.log('part number: ' + state.partNumber)
        }
        else if(state.userChoice.toString() == "5,5"){

            console.log('stringifying array and evaluating!')

            state.partNumber = 26

            console.log('part number: ' + state.partNumber)
        }
        else if(state.userChoice.toString() == "5,6"){

            console.log('stringifying array and evaluating!')

            state.partNumber = 27

            console.log('part number: ' + state.partNumber)
        }
    },

    centralVerifier(state, numberCode){

        console.log('CV activated')

        if(numberCode === 0){

            state.oneStatus = !state.oneStatus

            console.log('CV one status: ' + state.oneStatus)

        }else if(numberCode > 0 && numberCode < 100){
            
            console.log('number code: ' + numberCode + 'recieved!')

            state.oneCode = numberCode
            
            console.log('CV ONE code: ' + state.oneCode)
        }
        else if(numberCode === 100){
           
            state.bgStatus = !state.bgStatus
           
            console.log('CV bgstatus: ' + state.bgStatus)

        }
        else if (numberCode > 100 && numberCode < 200 ){

            console.log('number code: ' + numberCode + 'recieved!')

            state.bgCode = numberCode

            console.log("CV bgCode: " + state.bgCode)
        }
        else if (numberCode === 200){

            state.characterStatus = !state.characterStatus
        

            console.log('CV character status: ' + state.characterStatus)
        }
        else if (numberCode > 200 && numberCode < 300){

            console.log('number code: ' + numberCode + 'recieved!')

            state.characterCode = numberCode

            console.log("CV characterCode: " + state.characterCode)

        }
        else if(numberCode === 600){
            console.log('number code: ' + numberCode + 'recieved!')

            state.modalStatus = true
            state.arrayCounter = 0;

            console.log("modal activated")

        }

        else if(numberCode === 700){
            console.log('number code: ' + numberCode + 'recieved!')

            state.littleStatus = true

            console.log("CV little window")
        }

        else if (numberCode === 701){
            state.littleStatus = false
            state.partNumber = 2
            state.arrayCounter = 0;
        }

        else if (numberCode === 702){
            state.littleStatus = false
            state.partNumber = 2
            state.arrayCounter = 0;
        }

        else if (numberCode === 703){
            state.littleStatus = false
            state.partNumber = 3
            state.arrayCounter = 0;
        }

        else if (numberCode === 704){
            state.littleStatus = false
            state.partNumber = 4
            state.arrayCounter = 0;
        }

        else if (numberCode === 705){
            state.littleStatus = false
            state.partNumber = 2
            state.arrayCounter = 0;
        }

        else if (numberCode === 998){
            console.log('number code: ' + numberCode + 'recieved!')
            
            state.oneStatus = false,
            state.bgStatus = true,
            state.characterStatus = false,

            console.log("CV part up")
        }

        else if (numberCode === 999){
            console.log('number code: ' + numberCode + 'recieved!')

            
            state.partNumber++;
            state.arrayCounter = 0;

            console.log("CV part up")
        }
    },
}