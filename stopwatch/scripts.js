const btnPlayPause = document.querySelector('#play-pause-btn');
const btnStop = document.querySelector('#stop-btn');
const btnRecord = document.querySelector('#record-btn');
const timer = document.querySelector('#timer');
const ol = document.querySelector('#tour');

let intervalID;
let state = 0;

const date = {
    offsetTime: 0,
    lastRecord: 0,
};

function getTime() {
    return (Date.now() - (date.startDate - date.offsetTime));
}

function toggleState()
{
    if (state === 0) {
        btnStop.classList.remove('disabled');
        btnRecord.classList.remove('disabled');
        timer.classList.remove('disabled');
        btnPlayPause.classList.replace('fa-play', 'fa-pause');
        state = 1;
    }
    else {
        btnStop.classList.add('disabled');
        btnRecord.classList.add('disabled');
        timer.classList.add('disabled');
        btnPlayPause.classList.replace('fa-pause', 'fa-play');
        state = 0;
    }
}

function startTime(){
    date.startDate = Date.now();
    intervalID = setInterval(displayTime, 100);
}

function displayTime(){
    timer.textContent = formatTime(getTime());
}

function formatTime(milliSeconds){
    let date = new Date(0);
    date.setMilliseconds(milliSeconds);
    return (date.toISOString().substring(11, 19));
}
function playPause(event) {
    if (state === 0) {
        startTime()
    }
    else {
        clearInterval(intervalID);
        displayTime()
        date.offsetTime = getTime();
    }
    toggleState();
}

function deleteChild(element) {
    let elem = document.querySelector(element);
    
    let child = elem.lastChild;
    while(child) {
        elem.removeChild(child);
        child = elem.lastChild;
    }
}

function keyPressed(event) {
    switch (event.key) {
        case "Space":
            console.log('key');
            playPause();
            break;
        case "Enter":
            playPause();
            break;
        default:
            return;    
    }
}

function stop(event) {
    if (intervalID && state === 1) {
        toggleState()
        clearInterval(intervalID);
        intervalID = null;
        timer.textContent = formatTime(0);  
        deleteChild('ol');
        date.lastRecord = 0;
        date.offsetTime = 0;
    }
}

function record(event) {
    if (state === 1){
        let newli = document.createElement('li');
        let rec = getTime()
        if (date.lastRecord)
            newli.textContent = formatTime(rec - date.lastRecord);
        else 
            newli.textContent = formatTime(rec);
        date.lastRecord = rec;
        ol.appendChild(newli);
    }
}

btnPlayPause.addEventListener('click', playPause);
window.addEventListener('keydown', keyPressed);
btnStop.addEventListener('click', stop);
btnRecord.addEventListener('click', record);