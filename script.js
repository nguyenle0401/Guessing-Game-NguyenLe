
let randomNumber = Math.floor(Math.random() * 100);
let history = []
let guessesRemaining = 3;

function guessNumber() {
    guessesRemaining--;
    if (guessesRemaining >= 1) {
        document.getElementById("guesstime").innerHTML = `Guess time ${guessesRemaining}`
    } else {
        document.getElementById("warning").innerHTML = `Game over`
    }
    console.log(randomNumber)

    let userNumber = document.getElementById("guessingArea").value
    console.log(userNumber, "radom", randomNumber)
    history.push(userNumber);
    if (userNumber > randomNumber) {
        document.getElementById("resultArea").innerHTML = `To high`
    } else if (userNumber < randomNumber) {
        document.getElementById("resultArea").innerHTML = `To low`
    } else if (userNumber == randomNumber) {
        document.getElementById("resultArea").innerHTML = `Correct`
    }
    console.log(history)
    document.getElementById("historyArea").innerHTML = `History: ${history}`
}


function reset() {
    location.reload();
}


let time = 30;
let myTime;

function timeOut() {
    clearInterval(myTime);
}

function getReady(){
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