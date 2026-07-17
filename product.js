import { db } from "./firebase-config.js";
import {
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

const form = document.getElementById("productForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const product = {
    type: document.getElementById("productType").value,
    course: document.getElementById("course").value,
    subject: document.getElementById("subject").value,
    title: document.getElementById("title").value,
    price: document.getElementById("price").value,
    description: document.getElementById("description").value,
    createdAt: serverTimestamp()
  };

  try {
    await addDoc(collection(db, "products"), product);

    alert("Product Published Successfully");

    form.reset();

  } catch (error) {

    alert(error.message);

  }

});
