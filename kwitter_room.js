// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyARXbQ1RsN8J7J5_GT9figSE0u0qyLtZUg",
      authDomain: "kwitter-53d0e.firebaseapp.com",
      databaseURL: "https://kwitter-53d0e.firebaseio.com",
      projectId: "kwitter-53d0e",
      storageBucket: "kwitter-53d0e.appspot.com",
      messagingSenderId: "474577075683",
      appId: "1:474577075683:web:8eb0798b98d0027cc8b4d6"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+" !";

function addRoom()
{
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose:"just checking"
});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room name: "+Room_names);
row="<div class='room_name'id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      });});}
getData();
function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}
function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="kwitter.html";
}