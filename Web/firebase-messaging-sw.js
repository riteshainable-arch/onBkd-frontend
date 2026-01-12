importScripts(
    "https://www.gstatic.com/firebasejs/9.21.0/firebase-app-compat.js"
  );
  importScripts(
    "https://www.gstatic.com/firebasejs/9.21.0/firebase-messaging-compat.js"
  );
  
  const firebaseConfig = {
    apiKey: "AIzaSyB9aumjyBX_So3HrNXY_lAWOpm29-mm_00",
    authDomain: "cutenails-7a31c.firebaseapp.com",
    projectId: "cutenails-7a31c",
    storageBucket: "cutenails-7a31c.appspot.com",
    messagingSenderId: "260750834148",
    appId: "1:260750834148:web:753a9b27c3f0d69a086ff1",
    measurementId: "G-JFXZP95850",
  };
  
  firebase.initializeApp(firebaseConfig);
  
  const messaging = firebase.messaging();
  
  messaging.onBackgroundMessage((payload) => {
    console.log(
      "[firebase-messaging-sw.js] Received background message ",
      payload
    );
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
      icon: "/firebase-logo.png",
    };
  
    self.registration.showNotification(notificationTitle, notificationOptions);
  });