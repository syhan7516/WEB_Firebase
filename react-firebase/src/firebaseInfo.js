// 필요한 SDK에서 필요한 기능 가져오기
import { initializeApp } from "firebase/app";

// 사용할 Firebase 제품에 대한 SDK를 추가합니다.
// 공식문서 : https://firebase.google.com/docs/web/setup#available-libraries

// 웹 앱의 Firebase 객체 구성 
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APP_KEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_REACT_APP_MESSAGIN_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// 파이어베이스 초기화
export const app = initializeApp(firebaseConfig);