function addUser() {
  
    user_name = document.getElementById("user_name").value;
  
    localStorage.setItem("user_name", user_name);
    
    window.location = "kwitter_room.html";
}

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDsMi_8ywlhMzRRV2JwyOn4WGMMnlc0Z44",
    authDomain: "doctor-and-patient-chat-da1e5.firebaseapp.com",
    databaseURL: "https://doctor-and-patient-chat-da1e5-default-rtdb.firebaseio.com",
    projectId: "doctor-and-patient-chat-da1e5",
    storageBucket: "doctor-and-patient-chat-da1e5.appspot.com",
    messagingSenderId: "42532130317",
    appId: "1:42532130317:web:14f218f91719567fc38f44"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);