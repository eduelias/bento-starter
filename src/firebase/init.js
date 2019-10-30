import firebase from 'firebase/app'
import 'firebase/auth'

// The configuration below is not sensitive data. You can serenely add your config here
const config = {
  apiKey: 'AIzaSyDtu3sn4nvNfBR6mXBoIr6YwdyB8rI4gRc',
  authDomain: 'weaksuit-e9af2.firebaseapp.com',
  databaseURL: 'https://weaksuit-e9af2.firebaseio.com',
  projectId: 'weaksuit-e9af2',
  storageBucket: 'weaksuit-e9af2.appspot.com',
  messagingSenderId: '574583306981',
  appId: '1:574583306981:web:bd97d4c9108811f21eb20c',
  measurementId: 'G-4X9PLZSDLT'
}

firebase.initializeApp(config)
