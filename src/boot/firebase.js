// Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app'

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
// import { getStorage } from 'firebase/storage'
// import { getFirestore } from 'firebase/firestore'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBSyTJGDeaGIu8LxeX2XwR97oGvmfGJG6g',
  authDomain: 'kitstagram-cefdc.firebaseapp.com',
  databaseURL:
    'https://kitstagram-cefdc-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'kitstagram-cefdc',
  storageBucket: 'kitstagram-cefdc.appspot.com',
  messagingSenderId: '1003980580041',
  appId: '1:1003980580041:web:60fdf3c90a6d3e8d139918',
}
const firebaseApp = firebase.initializeApp(firebaseConfig)
export const fireDB = firebaseApp.firestore()
// Initialize Firebase
// export const fireApp = initializeApp(firebaseConfig)
// export const fireDB = getFirestore()

//https://www.positronx.io/vue-js-firebase-build-vue-crud-app-with-cloud-firestore/
