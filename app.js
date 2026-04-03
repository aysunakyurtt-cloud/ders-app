import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "BURAYA_API_KEYİNİ_YAZ",
  authDomain: "ders-programi-d79e0.firebaseapp.com",
  projectId: "ders-programi-d79e0",
  storageBucket: "ders-programi-d79e0.appspot.com",
  messagingSenderId: "265838203871",
  appId: "1:265838203871:web:6f1ea40d87f90edeeaea6a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const email = document.getElementById("email");
const password = document.getElementById("password");

const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");

// KAYIT OL
registerBtn.addEventListener("click", async () => {
  try {
    await createUserWithEmailAndPassword(auth, email.value, password.value);
    alert("Kayıt başarılı!");
  } catch (err) {
    alert(err.message);
  }
});

// GİRİŞ YAP
loginBtn.addEventListener("click", async () => {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    alert("Giriş başarılı!");
    window.location.href = "main.html";
  } catch (err) {
    alert(err.message);
  }
});
