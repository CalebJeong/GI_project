            // Import the functions you need from the SDKs you need
            import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
            import {
                getAuth,
                createUserWithEmailAndPassword,
                signInWithEmailAndPassword,
                onAuthStateChanged,
                signOut
            } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
            // TODO: Add SDKs for Firebase products that you want to use
            // https://firebase.google.com/docs/web/setup#available-libraries
          
            // Your web app's Firebase configuration
            const firebaseConfig = {
                apiKey: "AIzaSyA8DKtUzkz4RAPcp9Wzel9tbyujMNsR3-M",
                authDomain: "gi-gschool-information.firebaseapp.com",
                projectId: "gi-gschool-information",
                storageBucket: "gi-gschool-information.appspot.com",
                messagingSenderId: "366139705039",
                appId: "1:366139705039:web:b0c8b28203e983516699ba"
            };
          
            // Initialize Firebase
            const app = initializeApp(firebaseConfig);
            const auth = getAuth(app);
    
            const userEmail = document.querySelector("#login-userEmail");
            const userPassword = document.querySelector("#login-userPassword");
            const signInButton = document.querySelector("#signInButton");
    
            const userSignIn = async() => {
                const signInEmail = userEmail.value;
                const signInPassword = userPassword.value;
                signInWithEmailAndPassword(auth, signInEmail, signInPassword)
                .then((userCredential) => {
                    const user = userCredential.user
                    alert("로그인 했어!");
                    redirectToIndexPage();
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode + errorMessage);
                })
            }
    
            const redirectToIndexPage = () => {
                window.location.href = "index.html";
            }
    
            signInButton.addEventListener('click', userSignIn);
    
        