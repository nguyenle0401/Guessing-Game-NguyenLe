
let randomNumber = Math.floor(Math.random() * 100);
let history = []
let GUESS_LIMIT = 3;
let guessesRemaining = GUESS_LIMIT;
let active = false;
let win = false;
const INTERVAL = 30;
let time = INTERVAL;
let myTime;

function guessNumber() {
        let userNumber = document.getElementById("guessingArea").value
        console.log(userNumber, "radom", randomNumber)
        if( userNumber <= 0 || userNumber > 100){
            document.getElementById("resultArea").innerHTML =`Please enter 0 to 100 ${userNumber} already`;
        }else{
        if(history.includes(userNumber)){
            document.getElementById("resultArea").innerHTML =`You entered the number ${userNumber} already`;
        }
        else {
            history.push(userNumber);
            if (userNumber > randomNumber) {
                document.getElementById("resultArea").innerHTML = `Too high`
            } else if (userNumber < randomNumber) {
                document.getElementById("resultArea").innerHTML = `Too low`
            } else if (userNumber == randomNumber) {
                document.getElementById("resultArea").innerHTML = `Correct`
                win = true;
            }
            console.log(history)
            if (win) {
                clearInterval(myTime);
                document.getElementById("warning").innerHTML = `You win`
                document.getElementById("time-guess").innerHTML=`Mystery number:${randomNumber}`;
            }
            else {
                document.getElementById("historyArea").innerHTML = `History: ${history}`
                if (guessesRemaining === 1) {
                    document.getElementById("warning").innerHTML = `Game over`
                    document.getElementById("time-guess").innerHTML=`Mystery number:${randomNumber}`;
                }
                document.getElementById("guesstime").innerHTML = `Guess time ${guessesRemaining-1}`
        console.log(randomNumber)
                guessesRemaining--;
                
            }
        }
    }
        document.getElementById("guessingArea").value='';
}

function reset() {
    location.reload();
}

function timeOut() {
    document.getElementById("guessingArea").disabled = true;
    document.getElementById("guessBtn").disabled = true;
    clearInterval(myTime);
    document.getElementById("time-guess").innerHTML=`Mystery number:${randomNumber}`;
}

function getReady(){
    active = true;
    document.getElementById("guessingArea").disabled = false;
    document.getElementById("guessBtn").disabled = false;
    document.getElementById("getReadyBtn").disabled = true;
    document.getElementById("time-guess").innerHTML='';
    function timecounting() {
        myTime = setInterval(() => {
            time -= 1
            if (time === 0) {
                timeOut()
                document.getElementById("youLost").innerHTML = "You lost😭"
            }
            document.getElementById('timecount').innerHTML = `⏱`+ time +`s`}, 1000);
    }
    timecounting()
}


// function reset(){
//     guessesRemaining = 3
//     randomNumber = Math.floor(Math.random()*100)+1
//     history = []
//     document.getElementById("guessArea").value='';
//     document.getElementById("resultArea").value='';
//     document.getElementById("remainrea").value='';
//     document.getElementById("historyArea").value='';
//     console.log(randomNumber)
//     document,getElementById("guessButton").disabled=false
// }






//1-100
//1.read the number that user type
//compare user type number-x wit ramdom-y


//if x>y, to hight, x<y to low, x=y you won

//history



//remain chance -1
// change is 0, game over
//click reset button, should be reset - check go back to 5. reset history,reset input, reset result