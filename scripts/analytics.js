  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDNgc3ZuEu2TR-GH_wl0WflhTiXCdiiCko",
    authDomain: "lizzys-unique-palate.firebaseapp.com",
    projectId: "lizzys-unique-palate",
    storageBucket: "lizzys-unique-palate.firebasestorage.app",
    messagingSenderId: "1038151058195",
    appId: "1:1038151058195:web:7225a1143412eeb5d910e6",
    measurementId: "G-BR4X3GE058"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

