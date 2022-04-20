const btnPlayPause = document.querySelector('#play-pause-btn');
const btnStop = document.querySelector('#stop-btn');
const btnRecord = document.querySelector('#record-btn');
const timer = document.querySelector('#timer');
const ol = document.querySelector('#tour');

let state = 0;
let intervalID;
let startDate;
let offsetTime = 0;
let lastRecord = 0;
function toggleState()
{
    if (state === 0) {
        btnStop.removeAttribute('disabled');
        btnRecord.removeAttribute('disabled');
        btnPlayPause.textContent = "⏸️";
        state = 1;
    }
    else {
        btnStop.setAttribute('disabled', true);
        btnRecord.setAttribute('disabled', true);
        btnPlayPause.textContent = "▶";
        state = 0;
    }
}

function startTime(){
    startDate = Date.now();
    intervalID = setInterval(displayTime, 1000);
}

function displayTime(){
    let currentDate = Date.now();
    timer.textContent = formatTime(currentDate - (startDate - offsetTime));
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
        offsetTime = Date.now() - (startDate - offsetTime)
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

function stop(event) {
    if (timer.innerHTML !== "00:00:00") {
        toggleState()
        clearInterval(intervalID);
        milliSeconds = 0;
        timer.textContent = "00:00:00";
        deleteChild('ol');
        lastRecord = 0;
    }
}
function record(event) {
    let newli = document.createElement('li');

    if (lastRecord)
        newli.textContent = formatTime(Date.now() - (startDate - offsetTime) - lastRecord);
    else 
        newli.textContent = formatTime(Date.now() - (startDate - offsetTime));
    lastRecord = Date.now() - (startDate - offsetTime);
    ol.appendChild(newli);
}
btnPlayPause.addEventListener('click', playPause);
btnStop.addEventListener('click', stop);
btnRecord.addEventListener('click', record);