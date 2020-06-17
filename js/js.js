var divLoadingIcon;
$(function() {
    divLoadingIcon = document.getElementById("loader");
});

let worker = new Worker("/js/worker.js");

var requestedAnimationFrame;
let starttime = null;
var i = 0;

function animateLoadingIcon() {
    rotateCount = (new Date().getTime() - starttime) / 3;
    if (rotateCount > 359) {
      rotateCount %= 360;
    }
    divLoadingIcon.style.transform = 'rotate(' + rotateCount + 'deg)';
    requestedAnimationFrame = requestAnimationFrame(animateLoadingIcon);
}


function calc() {
    
    let randomMills = Math.random()*6000;
    console.log("Start with duration: " + randomMills +"ms.")

    starttime = new Date().getTime();
    
    animateLoadingIcon();   
    worker.postMessage([randomMills, starttime])
    
}

worker.onmessage = function (e) {
    console.log(e.data);
    cancelAnimationFrame(requestedAnimationFrame);
}