// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALrBtjBiEs6PZ7gLMpIMWubaV2Ox1Cm40",
  authDomain: "job-task-adcd3.firebaseapp.com",
  projectId: "job-task-adcd3",
  storageBucket: "job-task-adcd3.appspot.com",
  messagingSenderId: "605892493033",
  appId: "1:605892493033:web:a2edd1d24b5f0a2b187a78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth