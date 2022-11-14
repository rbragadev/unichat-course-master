import firebase from 'firebase/app';
import 'firebase/auth';

export const auth = firebase
  .initializeApp({
    apiKey: 'AIzaSyDlZAn-C4cItJc8BMfXbPyXXcYFwuin8EA',
    authDomain: 'unichat-fa1d2.firebaseapp.com',
    projectId: 'unichat-fa1d2',
    storageBucket: 'unichat-fa1d2.appspot.com',
    messagingSenderId: '1029690417720',
    appId: '1:1029690417720:web:dc4bbb71480297d149bccd',
  })
  .auth();
