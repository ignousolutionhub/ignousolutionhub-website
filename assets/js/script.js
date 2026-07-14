function searchCourse(){

let course=document.getElementById("searchInput").value.toUpperCase();

if(course=="BCA"){
window.location="courses.html";
}
else if(course=="MCA"){
window.location="courses.html";
}
else if(course=="BAG"){
window.location="courses.html";
}
else if(course=="BLIS"){
window.location="courses.html";
}
else{
alert("Course not found.");
}

}
