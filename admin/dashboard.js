import { auth } from "../firebase-config.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

onAuthStateChanged(auth, (user) => {
    if (!user) {
        window.location.href = "../admin.html";
    }
});

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
    logoutBtn.addEventListener("click", async (e) => {
        e.preventDefault();

        try {
            await signOut(auth);
            alert("Logged out successfully.");
            window.location.href = "../admin.html";
        } catch (error) {
            alert(error.message);
        }
    });
}
