'use strict';

var browserUserMedia =
        navigator.webkitGetUserMedia
     || navigator.mozGetUserMedia
     || navigator.mediaDevices.getUserMedia;

if (!browserUserMedia) {
    throw 'Your browser doesn\'t support WebRTC';
}

var getUserMedia = browserUserMedia.bind(navigator);

getUserMedia({
    audio: true,
    video: true
}, function getStream(stream) {
    console.log(stream);
    var videoElement = document.getElementById('video');
    videoElement.src = URL.createObjectURL(stream);
}, function errorLogger(err) {
    console.log(err);
});
