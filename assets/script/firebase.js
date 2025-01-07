const firebaseConfig = {
  apiKey: "AIzaSyBieLWRvpgHFtYDSC4JZAxGpX6TybvBY_I",
  authDomain: "chat-application-5f972.firebaseapp.com",
  databaseURL: "https://chat-application-5f972-default-rtdb.firebaseio.com",
  projectId: "chat-application-5f972",
  storageBucket: "chat-application-5f972.firebasestorage.app",
  messagingSenderId: "733620020619",
  appId: "1:733620020619:web:a77e30a657a5a9386bfb8e",
  measurementId: "G-SBR0Q3159T"
  };

  let app = firebase.initializeApp(firebaseConfig)

  const authenticationRoom = firebase.auth(); //importing authentication room from firebase to create users

  let databaseRoom = firebase.database();//importing database feature

  const messageFolder = databaseRoom.ref('messages'); //messages is the database folder name 
        
  let usersFolder = databaseRoom.ref('users');