import{initializeApp as e}from"https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";import{getAnalytics as t}from"https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";import{getAuth as s}from"https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";import{getFirestore as a}from"https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";import{getStorage as r}from"https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";let firebaseConfig={apiKey:"AIzaSyD5I2HD2mow3MiIKZoVI4JFITg5Vdouvvg",authDomain:"client-resturent1.firebase.com",projectId:"client-resturent1",storageBucket:"client-resturent1.appspot.com",messagingSenderId:"555014790342",appId:"1:555014790342:web:e2cbfb0a487d9aeb780bc7",measurementId:"G-7VKEFVRY4M"};export const app=e(firebaseConfig);export const analytics=t(app);export const auth=s(app);export const db=a(app);export const storage=r(app);