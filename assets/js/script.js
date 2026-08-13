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

/* IGNOU Quick Links sidebar - Home page only */
(function(){
    function addIgnouQuickLinks(){
        if(!document.body) return;
        if(document.getElementById("ignouQuickLinks")) return;

        const path=window.location.pathname.toLowerCase();
        const isHome=path.endsWith("/") || path.endsWith("/index.html");
        if(!isHome) return;

        const box=document.createElement("aside");
        box.id="ignouQuickLinks";
        box.innerHTML=`
            <div class="ignou-quick-title">🎓 IGNOU Quick Links</div>
            <a href="https://termendresult.ignou.ac.in/" target="_blank" rel="noopener noreferrer">📊 IGNOU Result</a>
            <a href="https://gradecard.ignou.ac.in/mpddstatus/Jan26/StudentMaterialStatus.aspx" target="_blank" rel="noopener noreferrer">📦 Study Material Status</a>
            <a href="https://webservices.ignou.ac.in/Pre-Question/" target="_blank" rel="noopener noreferrer">📄 Previous Year Question Paper</a>
            <a href="https://isms.ignou.ac.in/changeadmdata/AdmissionStatusNew.ASP" target="_blank" rel="noopener noreferrer">🎓 IGNOU Admission Status</a>
            <a href="https://www.egyankosh.ac.in/" target="_blank" rel="noopener noreferrer">📚 Online Study Material</a>
            <a href="https://isms.ignou.ac.in/changeadmdata/StatusAssignment.asp" target="_blank" rel="noopener noreferrer">📝 IGNOU Assignment Submission Status</a>
            <a href="https://gradecard.ignou.ac.in/" target="_blank" rel="noopener noreferrer">📋 IGNOU Grade Card</a>
        `;

        const style=document.createElement("style");
        style.id="ignouQuickLinksStyle";
        style.textContent=`
            #ignouQuickLinks{
                position:fixed;
                left:18px;
                top:175px;
                width:245px;
                background:#fff;
                border-radius:10px;
                box-shadow:0 4px 16px rgba(0,0,0,.18);
                overflow:hidden;
                z-index:9998;
                border:1px solid #e3e3e3;
            }
            #ignouQuickLinks .ignou-quick-title{
                background:#0b5ed7;
                color:#fff;
                padding:13px 14px;
                font-size:17px;
                font-weight:700;
            }
            #ignouQuickLinks a{
                display:block;
                color:#173f69;
                background:#fff;
                text-decoration:none;
                padding:11px 13px;
                font-size:14px;
                font-weight:600;
                border-bottom:1px solid #eee;
                line-height:1.3;
            }
            #ignouQuickLinks a:hover{
                background:#eef5ff;
                color:#005bb5;
            }
            @media(max-width:1200px){
                #ignouQuickLinks{left:10px;width:210px}
                #ignouQuickLinks a{font-size:13px}
            }
            @media(max-width:900px){
                #ignouQuickLinks{
                    position:relative;
                    left:auto;
                    top:auto;
                    width:calc(100% - 30px);
                    margin:15px auto;
                }
            }
        `;
        document.head.appendChild(style);
        document.body.appendChild(box);
    }

    if(document.readyState === "loading"){
        document.addEventListener("DOMContentLoaded",addIgnouQuickLinks);
    }else{
        addIgnouQuickLinks();
    }
})();
