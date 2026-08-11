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

/* Track Order button - visible on the Home page and other pages using this script */
(function(){
    function addTrackOrderButton(){
        if(document.getElementById("siteTrackOrderButton")) return;
        if(!document.body) return;

        const link=document.createElement("a");
        link.id="siteTrackOrderButton";
        link.href="track-order.html";
        link.innerHTML="📦 Track Order";
        link.setAttribute("aria-label","Track your order");

        Object.assign(link.style,{
            position:"fixed",
            top:"12px",
            right:"18px",
            zIndex:"999999",
            background:"#198754",
            color:"#fff",
            textDecoration:"none",
            padding:"10px 16px",
            borderRadius:"22px",
            fontWeight:"700",
            fontFamily:"Arial,sans-serif",
            fontSize:"15px",
            boxShadow:"0 3px 10px rgba(0,0,0,.25)",
            border:"2px solid #fff"
        });

        link.addEventListener("mouseenter",function(){
            link.style.background="#146c43";
        });
        link.addEventListener("mouseleave",function(){
            link.style.background="#198754";
        });

        document.body.appendChild(link);
    }

    if(document.readyState === "loading"){
        document.addEventListener("DOMContentLoaded",addTrackOrderButton);
    }else{
        addTrackOrderButton();
    }
})();
