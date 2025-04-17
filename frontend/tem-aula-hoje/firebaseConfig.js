import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


//Configuração do Firebase
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  };

//Inicializar o Firebase
const app = initializeApp(firebaseConfig);

//Inicializar a Autenticação do Firebase e criar uma referência para gerenciarmos a autenticação (login, logut, estado do usuário)
export const auth = getAuth(app);