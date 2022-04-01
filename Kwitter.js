function addUser() {

    user_name = document.getElementById("User_name").value;

    localStorage.setItem("user_name " , user_name);

    window.location = "kwitter_room.html";
}

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDO_Cxag6Jn3kUtdU2Krx6yY6NkBZiOAZU",
    authDomain: "class-project-802bb.firebaseapp.com",
    projectId: "class-project-802bb",
    storageBucket: "class-project-802bb.appspot.com",
    messagingSenderId: "1028538512933",
    appId: "1:1028538512933:web:882906ba64b083f9eb31cc",
    measurementId: "G-BYCLMCBF0M"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  function getData() {firebase.database().ref("/").on('value' , function(snapshot) {document.getElementById("output").innerHTML
   Group_name = childKey;



  });});}
  getData();