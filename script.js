// ===============================
// JIT MUSIC EVENT
// COMPLETE SCRIPT.JS
// ===============================

// Google Apps Script URL



// ===============================
// BOOKING FORM
// ===============================

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwekycZpKhVRy1JFsLTDHvHWmKpZ8VJOULdAUZwG4aQv7SffbwnyOyHFA_X9en8Q-SROw/exec";

const form = document.getElementById("bookingForm");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

const data={

name:form.elements[0].value,
mobile:form.elements[1].value,
email:form.elements[2].value,
event:form.elements[3].value,
date:form.elements[4].value,
time:form.elements[5].value,
venue:form.elements[6].value,
city:form.elements[7].value,
budget:"",
message:form.elements[8].value

};

fetch(SCRIPT_URL,{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(data)

})

.then(res=>res.text())

.then(result=>{

if(result.trim()=="SUCCESS"){

alert("✅ Booking Submitted Successfully!");

form.reset();

}else{

alert(result);

}

})

.catch(err=>{

console.log(err);

alert("❌ "+err.message);

});

});

}

// ===============================
// LOADER
// ===============================

window.addEventListener("load",()=>{

setTimeout(()=>{

const loader=document.getElementById("loader");

if(loader){

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},700);

}

},1200);

});



// ===============================
// HERO SLIDER
// ===============================

const hero=document.querySelector(".hero");

const heroImages=[

"https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1920",

"https://images.unsplash.com/photo-1511578314322-379afb476865?w=1920",

"https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=1920",

"https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920"

];

let current=0;

function heroSlider(){

if(!hero) return;

hero.style.backgroundImage=

`linear-gradient(rgba(0,0,0,.72),rgba(0,0,0,.72)),url('${heroImages[current]}')`;

current++;

if(current>=heroImages.length){

current=0;

}

}

heroSlider();

setInterval(heroSlider,5000);



// ===============================
// MOBILE MENU
// ===============================

const menu=document.querySelector(".menu-toggle");

const nav=document.querySelector(".navbar");

if(menu){

menu.onclick=()=>{

nav.classList.toggle("active");

};

}



// ===============================
// HEADER EFFECT
// ===============================

window.addEventListener("scroll",()=>{

const header=document.querySelector(".header");

if(window.scrollY>80){

header.style.background="#000";

header.style.boxShadow="0 15px 40px rgba(0,0,0,.45)";

}else{

header.style.background="rgba(0,0,0,.45)";

header.style.boxShadow="none";

}

});



// ===============================
// REVEAL
// ===============================

const reveals=document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

reveals.forEach(sec=>{

const top=sec.getBoundingClientRect().top;

if(top<window.innerHeight-120){

sec.classList.add("active");

}

});

});

reveals.forEach(sec=>{

sec.classList.add("reveal");

});



// ===============================
// COUNTER
// ===============================

const counters=document.querySelectorAll(".counter-box h2");

let started=false;

window.addEventListener("scroll",()=>{

const counter=document.querySelector(".counter");

if(!counter) return;

const top=counter.offsetTop-500;

if(window.scrollY>top && !started){

started=true;

runCounter();

}

});

function runCounter(){

counters.forEach(counter=>{

const target=parseInt(counter.innerText);

let count=0;

const speed=target/120;

function update(){

count+=speed;

if(count<target){

counter.innerText=Math.floor(count)+"+";

requestAnimationFrame(update);

}else{

counter.innerText=target+"+";

}

}

update();

});

}



// ===============================
// CURSOR
// ===============================

const cursor=document.querySelector(".cursor");

if(cursor){

document.addEventListener("mousemove",e=>{

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

});

}
// ===============================
// PREMIUM EXTRA FEATURES
// ADD THIS AT THE END OF script.js
// ===============================



// ACTIVE NAVBAR

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll(".navbar a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(sec=>{

const top=window.scrollY;
const offset=sec.offsetTop-150;
const height=sec.offsetHeight;

if(top>=offset && top<offset+height){

current=sec.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")=="#"+current){

link.classList.add("active");

}

});

});




// CLOSE MENU AFTER CLICK

navLinks.forEach(link=>{

link.addEventListener("click",()=>{

if(nav){

nav.classList.remove("active");

}

});

});




// IMAGE HOVER EFFECT

const gallery=document.querySelectorAll(".gallery-item img");

gallery.forEach(img=>{

img.addEventListener("mouseover",()=>{

img.style.transform="scale(1.15) rotate(2deg)";

});

img.addEventListener("mouseout",()=>{

img.style.transform="scale(1) rotate(0deg)";

});

});




// SCROLL TO TOP BUTTON

const topBtn=document.createElement("div");

topBtn.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

topBtn.className="topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="flex";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};




// BUTTON RIPPLE EFFECT

const buttons=document.querySelectorAll("button,.btn-primary,.btn-secondary");

buttons.forEach(btn=>{

btn.addEventListener("click",function(e){

const ripple=document.createElement("span");

const rect=this.getBoundingClientRect();

ripple.style.left=e.clientX-rect.left+"px";

ripple.style.top=e.clientY-rect.top+"px";

ripple.className="ripple";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});




// PRELOAD HERO IMAGES

heroImages.forEach(src=>{

const img=new Image();

img.src=src;

});




// DISABLE RIGHT CLICK (OPTIONAL)

document.addEventListener("contextmenu",e=>{

e.preventDefault();

});




// DISABLE F12 (OPTIONAL)

document.onkeydown=function(e){

if(e.keyCode==123){

return false;

}

};
// ===============================
// FINAL IMPROVEMENTS
// ADD THIS AT THE END OF script.js
// ===============================



// Smooth Fade Between Hero Images

hero.style.transition = "background-image 1s ease-in-out";



// Lazy Loading Images

document.querySelectorAll("img").forEach(img=>{

img.loading="lazy";

});



// Current Year

const year=document.querySelector(".copyright");

if(year){

year.innerHTML=`© ${new Date().getFullYear()} JIT MUSIC EVENT | All Rights Reserved.`;

}



// Navbar Close Outside Click

document.addEventListener("click",(e)=>{

if(nav && menu){

if(!nav.contains(e.target) && !menu.contains(e.target)){

nav.classList.remove("active");

}

}

});



// Hover Sound (Optional)

const hoverButtons=document.querySelectorAll(".btn-primary,.btn-secondary");

hoverButtons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-5px) scale(1.03)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0) scale(1)";

});

});



// Gallery Click Zoom

document.querySelectorAll(".gallery-item img").forEach(img=>{

img.addEventListener("click",()=>{

const overlay=document.createElement("div");

overlay.style.position="fixed";

overlay.style.top="0";

overlay.style.left="0";

overlay.style.width="100%";

overlay.style.height="100%";

overlay.style.background="rgba(0,0,0,.9)";

overlay.style.display="flex";

overlay.style.justifyContent="center";

overlay.style.alignItems="center";

overlay.style.zIndex="999999";

const image=document.createElement("img");

image.src=img.src;

image.style.maxWidth="90%";

image.style.maxHeight="90%";

image.style.borderRadius="20px";

overlay.appendChild(image);

document.body.appendChild(overlay);

overlay.onclick=()=>{

overlay.remove();

};

});

});



// Console Branding

console.clear();

console.log("%cJIT MUSIC EVENT","font-size:28px;color:#f4b400;font-weight:bold;");

console.log("%cDeveloped with ❤️","font-size:16px;color:white;");



// Performance

window.history.scrollRestoration="manual";



// End

console.log("Website Loaded Successfully 🚀");
// ===============================
// FINAL TOUCHES
// ADD THIS AT THE END OF script.js
// ===============================


// Disable submit button while submitting

if(form){

form.addEventListener("submit",()=>{

const btn=form.querySelector("button");

btn.disabled=true;

btn.innerHTML="Submitting...";

setTimeout(()=>{

btn.disabled=false;

btn.innerHTML="Book Now";

},3000);

});

}



// Fade In Page

document.body.style.opacity="0";

window.addEventListener("load",()=>{

document.body.style.transition="opacity .8s";

document.body.style.opacity="1";

});



// Auto Close Mobile Menu

document.querySelectorAll(".navbar a").forEach(link=>{

link.onclick=()=>{

if(nav){

nav.classList.remove("active");

}

};

});



// Floating Animation

document.querySelectorAll(".service-card,.why-card,.testimonial-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});



// Animate Numbers Once

let counted=false;

window.addEventListener("scroll",()=>{

const counter=document.querySelector(".counter");

if(counter){

if(window.scrollY>counter.offsetTop-500 && !counted){

counted=true;

runCounter();

}

}

});



// Welcome Message

setTimeout(()=>{

console.log("Welcome To JIT MUSIC EVENT");

},1000);



// Website Ready

console.log("========== WEBSITE READY ==========");

console.log("Hero Slider  ✓");
console.log("Booking Form ✓");
console.log("Gallery      ✓");
console.log("Counter      ✓");
console.log("Testimonials ✓");
console.log("WhatsApp     ✓");
console.log("Responsive   ✓");
console.log("Google Sheet ✓");
console.log("==================================");