import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDRs02uF-yi5R7x-dJd_GtgIP1CdoYThY4',
  authDomain: 'react-24-4-e-commerce.firebaseapp.com',
  projectId: 'react-24-4-e-commerce',
  storageBucket: 'react-24-4-e-commerce.firebasestorage.app',
  messagingSenderId: '760786932724',
  appId: '1:760786932724:web:a770ee6b95ae86aad55fa1',
  measurementId: 'G-8HTG5LZBC3',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);