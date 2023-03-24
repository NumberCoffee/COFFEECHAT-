 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyC6qIt0MiYAuGuzc06_RPGOf7giW9Wd2HI",
  authDomain: "abcd-qmfp.firebaseapp.com",
  databaseURL: "https://abcd-qmfp.firebaseio.com",
  projectId: "abcd-qmfp",
  storageBucket: "abcd-qmfp.appspot.com",
  messagingSenderId: "75495616295",
  appId: "1:75495616295:web:5b3f1ee1d3d74f286d4302",
  measurementId: "G-QN6H19MY2H"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

userName = localStorage.getItem("userName");
image = localStorage.getItem("image")
document.getElementById("userName").innerHTML = "Welcome" + userName + "!";
function addRoom()
{
  RoomName = document.getElementById("RoomName").value;
  firebase.database().ref("/").child(RoomName).update({
    purpose:"adding room name"
  });
  localStorage.setItem("RoomName", RoomName);
  window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log(Room_names);
row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("RoomName", name);
  window.location = kwitter_page.html;
}
function logOff(){
  localStorage.removeItem("userName");
  localStorage.removeItem("RoomName");
          window.location = "index.html";
}

function myFunction() {
  /* Get the text field */
  var copyText = "😀";

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}
