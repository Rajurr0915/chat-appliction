const firebaseConfig = {
    apiKey: "AIzaSyBieLWRvpgHFtYDSC4JZAxGpX6TybvBY_I",
    authDomain: "chat-application-5f972.firebaseapp.com",
    projectId: "chat-application-5f972",
    storageBucket: "chat-application-5f972.firebasestorage.app",
    messagingSenderId: "733620020619",
    appId: "1:733620020619:web:a77e30a657a5a9386bfb8e",
    measurementId: "G-SBR0Q3159T"
  };
  const app = firebase.initializeApp(firebaseConfig);//we are intializing firebase confirgurations in app
  const authenticationRoom = firebase.auth(); //importing authentication room from firebase to create users
  const databaseRoom = firebase.database(); //we are importing database room to store messages in database

  