// Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app'

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
// import { getStorage } from 'firebase/storage'
// import { getFirestore } from 'firebase/firestore'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {}
const firebaseApp = firebase.initializeApp(firebaseConfig)
export const fireDB = firebaseApp.firestore()
// Initialize Firebase
// export const fireApp = initializeApp(firebaseConfig)
// export const fireDB = getFirestore()

//https://www.positronx.io/vue-js-firebase-build-vue-crud-app-with-cloud-firestore/
