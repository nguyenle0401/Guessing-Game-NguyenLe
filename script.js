
let randomNumber = Math.floor(Math.random() * 100);
let history = []
let GUESS_LIMIT = 3;
let guessesRemaining = GUESS_LIMIT;
let active = false;

function guessNumber() {

    if (guessesRemaining >= 1) {
        document.getElementById("guesstime").innerHTML = `Guess time ${guessesRemaining-1}`
        console.log(randomNumber)

        let userNumber = document.getElementById("guessingArea").value
        console.log(userNumber, "radom", randomNumber)
        history.push(userNumber);
        if (userNumber > randomNumber) {
            document.getElementById("resultArea").innerHTML = `Too high`
        } else if (userNumber < randomNumber) {
            document.getElementById("resultArea").innerHTML = `Too low`
        } else if (userNumber == randomNumber) {
            document.getElementById("resultArea").innerHTML = `Correct`
        }
        console.log(history)
        document.getElementById("historyArea").innerHTML = `History: ${history}`
    } else {
        document.getElementById("warning").innerHTML = `Game over`
    }
    guessesRemaining--;
    document.getElementById("guessingArea").value='';

}


function reset() {
    location.reload();
}

const INTERVAL = 30;
let time = INTERVAL;
let myTime;

function timeOut() {
    document.getElementById("guessingArea").disabled = true;
    document.getElementById("guessBtn").disabled = true;
    clearInterval(myTime);
}

function getReady(){
    active = true;
    document.getElementById("guessingArea").disabled = false;
    document.getElementById("guessBtn").disabled = false;
    document.getElementById("getReadyBtn").disabled = true
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









//1-100
//1.read the number that user type
//compare user type number-x wit ramdom-y


//if x>y, to hight, x<y to low, x=y you won

//history



//remain chance -1
// change is 0, game over
//click reset button, should be reset - check go back to 5. reset history,reset input, reset result