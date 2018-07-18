(function () {
    sourabh.utils.nameSpace("sourabh.camera");
    sourabh.camera = function () {
        var camera = this;
        camera.captureFace = function (video, canvas) {
            if (video.paused) {
                video.play();
            } else {
                canvas.height = video.videoHeight;
                canvas.width = video.videoWidth;
                var ctx = canvas.getContext('2d');
                ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
                video.pause();
            }
        }
        camera.gotStream = function (stream, videoElement) {
            window.stream = stream; 
            videoElement.srcObject = stream;
        }
        camera.gotDevices = function (deviceInfos, target) {
            deviceInfos.forEach(function (deviceInfo) {
                var option = document.createElement('option');
                option.value = deviceInfo.deviceId;
                if (deviceInfo.kind === 'videoinput') {
                    option.text = deviceInfo.label || 'camera ' + (target.length + 1);
                    target.appendChild(option);
                }
            });
        }
        camera.getStream = function (deviceid) {
            if (window.stream) {
                window.stream.getTracks().forEach(function (track) {
                    track.stop();
                });
            }
            var constraints = {
                video: {
                    deviceId: { exact: deviceid }
                }
            };
            return navigator.mediaDevices.getUserMedia(constraints);
        }
        camera.captureFace = function (evt) {
            var faceCapture = _d.qs(".row-captured-face"),
                videoRow = _d.qs(".video-source-wrapper"),
                video = _d.qs(".faceid-camera"),
                canvas = _d.qs(".user-face");
            if (video.paused) {
                video.play();
            } else {
                canvas.height = video.videoHeight;
                canvas.width = video.videoWidth;
                var ctx = canvas.getContext('2d');
                ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
                video.pause();
                stream.active=false;
            }
            videoRow.classList.toggle("hide");
            faceCapture.classList.toggle("hide");
        }
    };
}());
