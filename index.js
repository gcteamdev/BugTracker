
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      document.getElementById("user_div").style.display = "block";
      document.getElementById("login_div").style.display = "none";
    } else {
      // User is signed out
      // ...
    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";
    }
  });





function login() {
  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error){
    //Handle error here.
    var errorCode = error.code;
    var errorMessage = error.message;
    //...
    window.alert("Error : " + errorMessage);

  });
 
}

function logout() {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      }); 
}

