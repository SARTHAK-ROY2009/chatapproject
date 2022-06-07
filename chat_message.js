user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
getData();

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
    });
    document.getElementById("msg").value = "";
}
const firebaseConfig = {
    apiKey: "AIzaSyCwCyPbYDGyy_ZHkQiL3E-_-8v1rs5lZP0",
    authDomain: "chatapp-8c761.firebaseapp.com",
    databaseURL: "https://chatapp-8c761-default-rtdb.firebaseio.com",
    projectId: "chatapp-8c761",
    storageBucket: "chatapp-8c761.appspot.com",
    messagingSenderId: "171846712636",
    appId: "1:171846712636:web:700e35d2794051886d7239"
  };
  

  const app = initializeApp(firebaseConfig);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);