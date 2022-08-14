// firebase file 생성 및 코드 추가

import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCOEufvyKtbAKzE6GrQcwKxVBALxAgQrr4",
    authDomain: "project-ca9fc.firebaseapp.com",
    projectId: "project-ca9fc",
    storageBucket: "project-ca9fc.appspot.com",
    messagingSenderId: "312955151426",
    appId: "1:312955151426:web:25fae601024002a0afb9db"
  };
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;