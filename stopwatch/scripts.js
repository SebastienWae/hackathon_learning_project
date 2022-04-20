const btnPlayPause = document.querySelector('#play-pause-btn');
const btnStop = document.querySelector('#stop-btn');
const btnRecord = document.querySelector('#record-btn');
const timer = document.querySelector('#timer');

let state = 0;


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

function playPause(event) {
    if (state === 0) {
        //startTime()
    }
    else {
        //pauseTime()
    }
    toggleState();
}

function stop(event) {
    if (timer.innerHTML === "00:00:00") {
        toggleState()
        //resetTime()
    }
}

btnPlayPause.addEventListener('click', playPause);
btnStop.addEventListener('click', stop);