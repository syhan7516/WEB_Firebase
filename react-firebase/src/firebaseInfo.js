// 필요한 SDK에서 필요한 기능 가져오기

// Firebase initial 사용을 위해 임포트
import { initializeApp } from "firebase/app";
// Firebase DB 사용을 위해 임포트
import { getFirestore } from "firebase/firestore";

// 웹 앱의 Firebase 객체 구성 & SDK 추가
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APP_KEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_REACT_APP_MESSAGIN_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// Firebase 객체 생성
const app = initializeApp(firebaseConfig);
// Firebase DB 객체 생성
const dbService = getFirestore(app);

export { app, dbService };



// 공식문서 : https://firebase.google.com/docs/web/setup#available-libraries