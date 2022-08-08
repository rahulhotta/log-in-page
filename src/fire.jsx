import { initializeApp } from "firebase/app";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAuawWH2TvssumHOcAmm_egwYJ1ZhF-1tQ",
  authDomain: "lab-based-project-libot.firebaseapp.com",
  projectId: "lab-based-project-libot",
  storageBucket: "lab-based-project-libot.appspot.com",
  messagingSenderId: "101757980166",
  appId: "1:101757980166:web:f53947132e83b559253d87",
};

const fire = initializeApp(firebaseConfig);
export default fire;
