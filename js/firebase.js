import firebase from './firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBNAJvJLaqsRNWBavqvaSh43l0sPVHTacM",
    authDomain: "portfolio-f1e77.firebaseapp.com",
    databaseURL: "https://portfolio-f1e77-default-rtdb.firebaseio.com",
    projectId: "portfolio-f1e77",
    storageBucket: "portfolio-f1e77.appspot.com",
    messagingSenderId: "761853165145",
    appId: "1:761853165145:web:ecd1c2dca567e617f37b48",
    measurementId: "G-FTLNESRR6K"
  };
  firebase.initializeApp(firebaseConfig);


document.getElementById('contact-form').addEventListener('submit', function(e) {

    e.preventDefault();
  
    // Récupérez les données du formulaire
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var object = document.getElementById('object').value;
    var message = document.getElementById('message').value;
  
    // Enregistrez les données dans Firebase
    var db = firebase.database();
    db.ref('WebMessage').push({
      name: name,
      email: email,
      phone: phone,
      object: object,
      message: message
    });
  
    // Réinitialisez le formulaire
    e.target.reset();
  });