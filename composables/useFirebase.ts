import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const useFirebase = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyDLhz6pltBza6_k-1dfFnbEGWieubUSZXQ",
        authDomain: "intellect-6e845.firebaseapp.com",
        projectId: "intellect-6e845",
        storageBucket: "intellect-6e845.appspot.com",
        messagingSenderId: "57849086271",
        appId: "1:57849086271:web:0a793db1f527d68118938a"
    };

    const firebaseApp = initializeApp(firebaseConfig);
    const firestore = getFirestore(firebaseApp);

    return {
        firebaseApp,
        firestore,
    }
}