import app from "firebase/app";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyCk9Qv8AhI6ecDCjUTMVg0p3AX_Ujmgrcc",
  authDomain: "eventhub-937fb.firebaseapp.com",
  databaseURL: "https://eventhub-937fb.firebaseio.com",
  projectId: "eventhub-937fb",
  storageBucket: "eventhub-937fb.appspot.com",
  messagingSenderId: "414248788860",
  appId: "1:414248788860:web:f8907124a6e88026b33af9",
  measurementId: "G-GCX6PZ9Q5K",
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
  }

  //authentication API (contextAPI)

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
  doSignOut = () => this.auth.signOut();

  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = (password) =>
    this.auth.currentUser.updatePassword(password);
}

export default Firebase;
