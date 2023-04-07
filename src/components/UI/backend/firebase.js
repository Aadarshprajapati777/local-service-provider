import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDzqpQuv4TitW5dsBYjwQu3tM_S56GC6kI",
  authDomain: "local-service-provider-eccba.firebaseapp.com",
  databaseURL: "https://local-service-provider-eccba-default-rtdb.firebaseio.com",
  projectId: "local-service-provider-eccba",
  storageBucket: "local-service-provider-eccba.appspot.com",
  messagingSenderId: "485007023296",
  appId: "1:485007023296:web:718c3a5672272c9a44e125"
};

export const app = initializeApp(firebaseConfig);