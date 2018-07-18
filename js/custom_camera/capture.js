function initCamera() {
    var camera = new sourabh.camera(),
    videoElement = _d.qs('video'),
    videoid = _d.qs('#videoSource');
    function initializeCamera() {
        navigator.mediaDevices.enumerateDevices()
            .then(function (deviceInfos) {
                camera.gotDevices(deviceInfos, videoid);
            }).then(function () {
                return camera.getStream(videoid.value)
                    .then(function (stream) {
                        camera.gotStream(stream, videoElement);
                    });
            })
            .then(function () {
                var captureBtn = _d.qs("#btnCapture");
                captureBtn.addEventListener("click", function(){
                    camera.captureFace();
                    getPhotoFromdataURL();
                });
            })
            .catch(handleError);
    }
    function getPhotoFromdataURL() {
        var canvas = _d.qs(".user-face");
        canvas.toBlob(
            function (blob) {
                addPhoto(blob);
            },
            'image/png'
        );
    }
    function setupCamera() {
        videoid.onchange = camera.getStream;
        initializeCamera();
    }
    function handleError(error) {
        console.log('Error: ', error);
    }
    setupCamera();
}