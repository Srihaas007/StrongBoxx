// Import the functions you need from the SDKs you want to use
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
import { getAuth, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";

// Your Firebase project's configuration object
const firebaseConfig = {
  apiKey: "AIzaSyD-gIwNLSO169SVj8f5qdBjuzo5Kzr5bdo",
  authDomain: "strongboxx-db92c.firebaseapp.com",
  databaseURL: "https://strongboxx-db92c-default-rtdb.firebaseio.com",
  projectId: "strongboxx-db92c",
  storageBucket: "strongboxx-db92c.appspot.com",
  messagingSenderId: "685404967390",
  appId: "1:685404967390:web:4de1d8cc77840135f44d4f"
};

// Initialize Firebase with your project's configuration
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

const logoutButton = document.getElementById('logout');
logoutButton.addEventListener('click', () => {
  auth.signOut().then(() => {
    // Redirect the user to the home page after sign out
    window.location.href = "Home.html";
  });
});

// Add event listener for when the user authentication state changes
onAuthStateChanged(auth, (user) => {
  if (user) {
    // If the user is signed in, get their first name from the database and display it on the page
    get(ref(database, `users/${user.uid}/firstName`))
      .then((snapshot) => {
        const firstName = snapshot.val();
        const userFirstNameElement = document.getElementById('user-first-name');
        userFirstNameElement.textContent = firstName;
      })
      .catch((error) => {
        console.error(error);
      });
  } else {
    // If the user is signed out, redirect them to the login page
    window.location.href = "Home.html";
  }
});
