const button = document.getElementById("start");

const target1 = document.getElementById("target1");
const target2 = document.getElementById("target2");
const target3 = document.getElementById("target3");
const hsElement = document.getElementById("hs");

var seconds = 00;
var mSeconds = 00;
var timer;
var highScore = 1000000;
var hsM;
var hsS;

const clockS = document.getElementById('secs');
const clockM = document.getElementById('mSecs');

button.onclick = () => {

    button.style.pointerEvents = "none";
    button.innerHTML = "STARTING...";

    setTimeout(() => {
    
        button.innerHTML = "START";
        seconds = 00;
        mSeconds = 00;
        clockM.innerHTML = mSeconds;
        clockS.innerHTML = seconds;
        clearInterval(timer);
        timer = setInterval(startTimer, 10)

        let size1 = Math.floor(Math.random()*60+40) + "px"
        let size2 = Math.floor(Math.random()*60+40) + "px"
        let size3 = Math.floor(Math.random()*60+40) + "px"

        target1.style.backgroundColor = "blue";
        target2.style.backgroundColor = "blue";
        target3.style.backgroundColor = "blue";
        target1.style.height = size1 + "px";
        target2.style.height = size2 + "px";
        target3.style.height = size3 + "px";
        target1.style.width = size1 + "px";
        target2.style.width = size2 + "px";
        target3.style.width = size3 + "px";
        target1.style.borderRadius = Math.floor(Math.random()*50) + "%";
        target2.style.borderRadius = Math.floor(Math.random()*10+40) + "%";
        target3.style.borderRadius = Math.floor(Math.random()*10) + "%";

        target1.style.pointerEvents = "auto";
        target2.style.pointerEvents = "auto";
        target3.style.pointerEvents = "auto";

        let posY1 = Math.floor(Math.random()*70+15);
        let posY2 = Math.floor(Math.random()*70+15);
        let posY3 = Math.floor(Math.random()*70+15);
        let posX1 = Math.floor(Math.random()*90+5);
        let posX2 = Math.floor(Math.random()*90+5); 
        let posX3 = Math.floor(Math.random()*90+5);

        target1.style.left = posX1 + "%";
        target1.style.top = posY1 + "%";
        target2.style.left = posX2 + "%";
        target2.style.top = posY2 + "%";
        target3.style.left = posX3 + "%";
        target3.style.top = posY3 + "%";
    
    }, Math.floor(Math.random()*6000+2000));
    
}

target1.onclick = () => {
    target1.style.backgroundColor = "red";
    target1.style.pointerEvents = "none";
}

target2.onclick = () => {
    target2.style.backgroundColor = "red";
    target2.style.pointerEvents = "none";
}

target3.onclick = () => {
    target3.style.backgroundColor = "red";
    target3.style.pointerEvents = "none";
}


function startTimer() {
    mSeconds++

    clockM.innerHTML = mSeconds;
    
    if(mSeconds <= 9)
    {
        clockM.innerHTML = "0" + mSeconds;
    }

    if(mSeconds > 99){
        seconds++;
        clockS.innerHTML = seconds;
        mSeconds = 00;
        clockM.innerHTML = "0" + mSeconds;
    }

    if(target1.style.backgroundColor == "red" && target2.style.backgroundColor == "red" && target3.style.backgroundColor == "red")
    {
        clearInterval(timer);
        
        if ((seconds*100 + mSeconds) <= highScore)
        {
            highScore = seconds*100 + mSeconds;
            hsM = mSeconds;
            hsS = seconds;
            
        }
        hsElement.innerHTML = hsS + ":" + hsM;

        if (hsM <= 9)
        {
            hsElement.innerHTML = hsS + ":" + "0" + hsM;
        }
        
        button.style.pointerEvents = "auto";
    }

    
}