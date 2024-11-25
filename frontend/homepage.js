const faqHeaders = document.querySelectorAll('.faq-header');

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import {getAuth, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js"
import {getFirestore, getDoc, doc} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js"

const logoutButton=document.getElementById('logout');

logoutButton.addEventListener('click',()=>{
      window.location.href='index.html';
  })
const firebaseConfig = {
    apiKey: "AIzaSyB9Zo_x6xdTUnDwVN7rVJHp4s-NQQ6Pe-4",
    authDomain: "hackathonproject-30b00.firebaseapp.com",
    projectId: "hackathonproject-30b00",
    storageBucket: "hackathonproject-30b00.firebasestorage.app",
    messagingSenderId: "922792702534",
    appId: "1:922792702534:web:617e6450c44125e6d55047"
  };
  
  
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const auth=getAuth();
  const db=getFirestore();

  onAuthStateChanged(auth, (user)=>{
    const loggedInUserId=localStorage.getItem('loggedInUserId');
    if(loggedInUserId){
        console.log(user);
        const docRef = doc(db, "users", loggedInUserId);
        getDoc(docRef)
        .then((docSnap)=>{
            if(docSnap.exists()){
                const userData=docSnap.data();
                document.getElementById('loggedUserFName').innerText=userData.firstName;
                document.getElementById('loggedUserEmail').innerText=userData.email;
                document.getElementById('loggedUserLName').innerText=userData.lastName;

            }
            else{
                console.log("no document found matching id")
            }
        })
        .catch((error)=>{
            console.log("Error getting document");
        })
    }
    else{
        console.log("User Id not Found in Local storage")
    }
  })





faqHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;

        // Toggle display of content
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const loaderWrapper = document.getElementById("loader-wrapper");
  
    setTimeout(() => {
      loaderWrapper.style.opacity = "0";
      loaderWrapper.style.transition = "opacity 0.5s ease-in-out";
      setTimeout(() => {
        loaderWrapper.style.display = "none";
      }, 500);
    }, 1500);
  });
  document.addEventListener("DOMContentLoaded", () => {
    const text = "Hack the limits";
    const container = document.getElementById("animatedText");  
    
    // Create spans for each letter
text.split("").forEach(char => {
const span = document.createElement("span");
span.className = "letter";
span.innerHTML = char === " " ? "&nbsp;" : char; // Use &nbsp; for spaces
container.appendChild(span);
});

    const letters = document.querySelectorAll(".letter");
    const totalLetters = letters.length;
    const delayIncrement = 100; // Delay in milliseconds

    function easeInOutQuart(t) {
        return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
    }

    function animateLetters(forward = true) {
        letters.forEach((letter, index) => {
            // const delay = Math.max(index, totalLetters - index) * delayIncrement;
          
            const normalizedIndex = Math.max(index, totalLetters - 1 - index) / (totalLetters - 1);
            const easedDelay = easeInOutQuart(normalizedIndex);
            const delay = easedDelay * (totalLetters - 1) * delayIncrement;
          
            setTimeout(() => {
                letter.style.setProperty("--wght", forward ? 700 : 100);
                letter.style.setProperty("--wdth", forward ? 400 : 150);
                letter.style.setProperty("--opacity", forward ? 1 : 0.25);
                letter.style.setProperty("--letter-spacing", forward ? '0.05em' : '0em');
                // letter.style.setProperty("--font-size", forward ? '12vw' : '10vw');
            }, delay);
        });

      setTimeout(() => animateLetters(!forward), 4000);
    }

    animateLetters();
});






