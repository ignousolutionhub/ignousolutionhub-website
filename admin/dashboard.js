import { auth } from "../firebase-config.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

// Check if admin is logged in
onAuthStateChanged(auth, (user) => {
    if (!user) {
        window.location.href = "../admin.html";
    }
});

// Logout
document.getElementById("logoutBtn").addEventListener("click", async (e) => {
    e.preventDefault();

    try {
        await signOut(auth);
        alert("Logged out successfully.");
        window.location.href = "../admin.html";
    } catch (error) {
        alert(error.message);
    }
});
