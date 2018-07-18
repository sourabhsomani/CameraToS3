//Cognito_interviewsourabhAuth_Role
var albumBucketName = '';
var bucketRegion = '';
var IdentityPoolId = '';

AWS.config.update({
  region: bucketRegion,
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: IdentityPoolId
  })
});

var s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  params: {Bucket: albumBucketName}
});

function addPhoto(blob) {
    debugger;
    var fileName = "filename"+(new Date()).getTime()+".png";
    var file = new File([blob], fileName);
    var albumPhotosKey = encodeURIComponent("key_"+(new Date()).getTime()) + '//';
  
    var photoKey = albumPhotosKey + fileName;
    s3.upload({
      Key: photoKey,
      Body: file,
      ACL: 'public-read'
    }, function(err, data) {
      if (err) {
        return alert('There was an error uploading your photo: ', err.message);
      }
      alert('Successfully uploaded photo.');
    });
  }