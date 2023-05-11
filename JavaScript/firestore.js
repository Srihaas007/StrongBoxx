      import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
      import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
      import { getAuth, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
      import { getFirestore, collection, addDoc, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";
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

// Get a reference to the Firestore database
const db = getFirestore(app);

// Retrieve payments data from Firestore
db.collection("users").doc("user_mail_id").collection("payments").doc("payment_id").get().then((doc) => {
    querySnapshot.forEach((doc) => {
        var data = doc.data();
        var customerName = data.customerName;
        var customerEmail = data.customerEmail;
        var customerPhone = data.customerPhone;
        var merchantName = data.merchantName;
        var merchantEmail = data.merchantEmail;
        var merchantPhone = data.merchantPhone;
        var category = data.category;
        var totalPrice = data.totalPrice;
        var finalPrice = data.finalPrice;
        // Create a new row in the table for each payment
        var row = document.createElement("tr");
        row.innerHTML = "<td>" + customerName + "</td><td>" + customerEmail + "</td><td>" + customerPhone + "</td><td>" + merchantName + "</td><td>" + merchantEmail + "</td><td>" + merchantPhone + "</td><td>" + category + "</td><td>" + totalPrice + "</td><td>" + finalPrice + "</td>";
        document.getElementById("payments").appendChild(row);
    });
}).catch((error) => {
    console.log("Error getting documents: ", error);
});
