// import firebase from './firebase';

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBNAJvJLaqsRNWBavqvaSh43l0sPVHTacM",
    authDomain: "portfolio-f1e77.firebaseapp.com",
    databaseURL: "https://portfolio-f1e77-default-rtdb.firebaseio.com",
    projectId: "portfolio-f1e77",
    storageBucket: "portfolio-f1e77.appspot.com",
    messagingSenderId: "761853165145",
    appId: "1:761853165145:web:28be50129423794ef37b48",
    measurementId: "G-XH21CKZHX8"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

document.getElementById('contact-form').addEventListener('submit', function(e) {

    e.preventDefault();
  
    // Récupérez les données du formulaire
    console.log('getdata')
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var object = document.getElementById('object').value;
    var message = document.getElementById('message').value;
  
    // Enregistrez les données dans Firebase
    var db = firebase.database();
    console.log('send data')
    db.ref('WebMessage').push({
      name: name,
      email: email,
      phone: phone,
      object: object,
      message: message,
      
    });
  
    // Réinitialisez le formulaire
    e.target.reset();
  });