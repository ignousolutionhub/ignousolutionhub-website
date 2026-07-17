import { db, storage } from "./firebase-config.js";

import {
addDoc,
collection,
serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

import {
ref,
uploadBytes,
getDownloadURL
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-storage.js";

const form = document.getElementById("productForm");

form.addEventListener("submit", async (e) => {

e.preventDefault();

const imageFile = document.getElementById("image").files[0];
const pdfFile = document.getElementById("pdf").files[0];

if (!imageFile || !pdfFile) {

alert("Please Select Image and PDF");

return;

}

try {

const imageRef = ref(storage, "products/images/" + Date.now() + "_" + imageFile.name);

await uploadBytes(imageRef, imageFile);

const imageURL = await getDownloadURL(imageRef);

const pdfRef = ref(storage, "products/pdfs/" + Date.now() + "_" + pdfFile.name);

await uploadBytes(pdfRef, pdfFile);

  
const pdfURL = await getDownloadURL(pdfRef);const product = {

type: document.getElementById("productType").value,

course: document.getElementById("course").value,

subject: document.getElementById("subject").value,

title: document.getElementById("title").value,

price: Number(document.getElementById("price").value),

description: document.getElementById("description").value,

image: imageURL,

pdf: pdfURL,

createdAt: serverTimestamp()

};

await addDoc(collection(db, "products"), product);

alert("✅ Product Published Successfully");

form.reset();

}

catch(error){

console.error(error);

alert(error.message);

}

});
