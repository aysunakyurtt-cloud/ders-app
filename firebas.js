// 🔥 Firebase import
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// 🔥 SENİN CONFIG (DEĞİŞTİRME)
const firebaseConfig = {
  apiKey: "AIzaSyBCUrqU_PzrConRKjlyNoZ7yU38ZPwxkf",
  authDomain: "ders-programi-d79e0.firebaseapp.com",
  projectId: "ders-programi-d79e0",
  storageBucket: "ders-programi-d79e0.appspot.com",
  messagingSenderId: "265838203871",
  appId: "1:265838203871:web:6f1ea40d87f90deeeae6a"
};

// 🔥 başlat
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
