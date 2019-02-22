import firebase from "firebase/app";
// sub dependencies
import "firebase/auth";
import "firebase/database";
import "firebase/storage"; // store media files

var config = {
  apiKey: "AIzaSyBRZZtEDXlg-o-5DoXNCmkEIr7QbIlU3S8",
  authDomain: "react-slack-clone-1de1c.firebaseapp.com",
  databaseURL: "https://react-slack-clone-1de1c.firebaseio.com",
  projectId: "react-slack-clone-1de1c",
  storageBucket: "react-slack-clone-1de1c.appspot.com",
  messagingSenderId: "172859828923"
};
firebase.initializeApp(config);

export default firebase;
