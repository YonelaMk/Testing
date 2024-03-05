// Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBzCdmzHxsbu1jWVT_IHtvdvy58YFtogGo",
    authDomain: "authentication-app-807a4.firebaseapp.com",
    databaseURL: "https://authentication-app-807a4-default-rtdb.firebaseio.com",
    projectId: "authentication-app-807a4",
    storageBucket: "authentication-app-807a4.appspot.com",
    messagingSenderId: "104998105705",
    appId: "1:104998105705:web:7bfbb2c8f752610aa068f8"
};

// Initialize firebase
firebaseConfig.initializeApp(firebaseConfig);

// Reference to storage service 
var storage = firebase.storage();
var storageRef = storage.ref();

// Upload images function
function uploadImages() {
    var files = document.getElementById('imageUpload').files;
    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        var uploadTask = storageRef.child('images/' + filename).put(file);

        // Listen for state changes, errors and completion of upload
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, function (snapshot) {
            // Get task progress, including the number of bytes uploaded and total number of bytes to be uploaded
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED:
                    break;
                case firebase.storage.TaskState.RUNNING:
                    console.log('Upload running...');
                    break;
            }
        }, function (error) {
            // Handle failed uploads
            console.log(error);
        }, function () {
            // Handle successful uploads
            uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                console.log('File available at ' + downloadURL);
            });
        });
    }
}

