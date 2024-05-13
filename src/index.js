
import { initializeApp } from "firebase/app";
import { addDoc, collection, getDocs, getFirestore, serverTimestamp } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyAgzQyt-hHD0Bpfp9X6xE0aoYsgnDbtUWU",
   authDomain: "myprofile-8b7df.firebaseapp.com",
   projectId: "myprofile-8b7df",
   storageBucket: "myprofile-8b7df.appspot.com",
   messagingSenderId: "595631095157",
   appId: "1:595631095157:web:39433e1426977fe208273c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const messages = collection(db, 'PortfolioMessage');

const form = document.querySelector("#contact-form");
const alertDiv = document.querySelector(".alert");

form.addEventListener("submit", (e) => {
   e.preventDefault();

   addDoc(messages, {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      object: form.object.value,
      message: form.message.value,
      sendDate: serverTimestamp(),
   }).then(() => {
      form.reset()
      alertDiv.style.display = "block";
   });

});



