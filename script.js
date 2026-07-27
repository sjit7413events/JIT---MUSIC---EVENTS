// ===============================
// JIT MUSIC EVENT
// COMPLETE SCRIPT.JS
// ===============================

// ===============================
// GOOGLE APPS SCRIPT URL
// ===============================

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwekycZpKhVRy1JFsLTDHvHWmKpZ8VJOULdAUZwG4aQv7SffbwnyOyHFA_X9en8Q-SROw/exec";

// ===============================
// BOOKING FORM
// ===============================

const form = document.getElementById("bookingForm");

if (form) {

    form.addEventListener("submit", async function (e) {

        e.preventDefault();

        const submitBtn = form.querySelector('button[type="submit"]');

        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = "Submitting...";
        }

        const data = {

            name: form.elements[0].value,
            mobile: form.elements[1].value,
            email: form.elements[2].value,
            event: form.elements[3].value,
            date: form.elements[4].value,
            time: form.elements[5].value,
            venue: form.elements[6].value,
            city: form.elements[7].value,
            budget: "",
            message: form.elements[8].value

        };

        try {

            const response = await fetch(SCRIPT_URL, {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(data)

            });

            const result = await response.text();

            if (result.trim() === "SUCCESS") {

                alert("✅ Booking Submitted Successfully!");

                form.reset();

            } else {

                alert(result);

            }

        } catch (err) {

            console.error(err);

            alert("❌ " + err.message);

        }

        if (submitBtn) {

            submitBtn.disabled = false;

            submitBtn.innerHTML = "Book Now";

        }

    });

}
// ===============================
// LOADER
// ===============================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(() => {

            loader.style.opacity = "0";

            setTimeout(() => {

                loader.style.display = "none";

            }, 700);

        }, 1200);

    }

});


// ===============================
// HERO SLIDER
// ===============================

const hero = document.querySelector(".hero");

const heroImages = [

    "images/hero.jpg",
    "images/hero2.jpg",
    "images/hero3.jpg",
    "images/hero4.jpg"

];

let currentHero = 0;

function heroSlider() {

    if (!hero) return;

    hero.style.transition = "background-image 1s ease-in-out";

    hero.style.backgroundImage =
        `linear-gradient(rgba(0,0,0,.70),rgba(0,0,0,.70)),url('${heroImages[currentHero]}')`;

    currentHero++;

    if (currentHero >= heroImages.length) {

        currentHero = 0;

    }

}

if (hero) {

    heroSlider();

    setInterval(heroSlider, 5000);

}


// ===============================
// PRELOAD HERO IMAGES
// ===============================

heroImages.forEach(src => {

    const img = new Image();

    img.src = src;

});


// ===============================
// MOBILE MENU
// ===============================

const menu = document.querySelector(".menu-toggle");

const nav = document.querySelector(".navbar");

if (menu && nav) {

    menu.addEventListener("click", () => {

        nav.classList.toggle("active");

    });

}


// ===============================
// HEADER EFFECT
// ===============================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 80) {

        header.style.background = "#000";

        header.style.boxShadow = "0 15px 40px rgba(0,0,0,.45)";

    } else {

        header.style.background = "rgba(0,0,0,.45)";

        header.style.boxShadow = "none";

    }

});
// ===============================
// REVEAL ANIMATION
// ===============================

const reveals = document.querySelectorAll("section");

function revealSections() {

    reveals.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if (top < window.innerHeight - 120) {

            section.classList.add("active");

        }

    });

}

reveals.forEach(section => {

    section.classList.add("reveal");

});

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);


// ===============================
// COUNTER
// ===============================

const counterSection = document.querySelector(".counter");
const counters = document.querySelectorAll(".counter-box h2");

let counterStarted = false;

function runCounter() {

    counters.forEach(counter => {

        const target = parseInt(counter.textContent);

        if (isNaN(target)) return;

        let count = 0;
        const speed = Math.max(1, target / 120);

        function update() {

            count += speed;

            if (count < target) {

                counter.textContent = Math.floor(count) + "+";
                requestAnimationFrame(update);

            } else {

                counter.textContent = target + "+";

            }

        }

        update();

    });

}

window.addEventListener("scroll", () => {

    if (!counterSection || counterStarted) return;

    if (window.scrollY > counterSection.offsetTop - 500) {

        counterStarted = true;
        runCounter();

    }

});


// ===============================
// ACTIVE NAVBAR
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = window.scrollY;
        const offset = section.offsetTop - 150;
        const height = section.offsetHeight;

        if (top >= offset && top < offset + height) {

            current = section.id;

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ===============================
// AUTO CLOSE MOBILE MENU
// ===============================

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (nav) {

            nav.classList.remove("active");

        }

    });

});
// ===============================
// CUSTOM CURSOR
// ===============================

const cursor = document.querySelector(".cursor");

if (cursor) {

    document.addEventListener("mousemove", (e) => {

        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";

    });

}


// ===============================
// GALLERY HOVER EFFECT
// ===============================

document.querySelectorAll(".gallery-item img").forEach(img => {

    img.addEventListener("mouseenter", () => {

        img.style.transform = "scale(1.08)";
        img.style.transition = "0.4s";

    });

    img.addEventListener("mouseleave", () => {

        img.style.transform = "scale(1)";

    });

});


// ===============================
// GALLERY IMAGE POPUP
// ===============================

document.querySelectorAll(".gallery-item img").forEach(img => {

    img.addEventListener("click", () => {

        const overlay = document.createElement("div");

        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.background = "rgba(0,0,0,.9)";
        overlay.style.display = "flex";
        overlay.style.justifyContent = "center";
        overlay.style.alignItems = "center";
        overlay.style.zIndex = "999999";

        const image = document.createElement("img");

        image.src = img.src;
        image.style.maxWidth = "90%";
        image.style.maxHeight = "90%";
        image.style.borderRadius = "20px";

        overlay.appendChild(image);

        document.body.appendChild(overlay);

        overlay.addEventListener("click", () => {

            overlay.remove();

        });

    });

});


// ===============================
// SCROLL TO TOP BUTTON
// ===============================

const topBtn = document.createElement("div");

topBtn.className = "topBtn";
topBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});


// ===============================
// BUTTON RIPPLE EFFECT
// ===============================

document.querySelectorAll("button,.btn-primary,.btn-secondary").forEach(btn => {

    btn.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        const rect = this.getBoundingClientRect();

        ripple.className = "ripple";

        ripple.style.left = (e.clientX - rect.left) + "px";
        ripple.style.top = (e.clientY - rect.top) + "px";

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});
// ===============================
// LAZY LOAD ALL IMAGES
// ===============================

document.querySelectorAll("img").forEach(img => {
    img.loading = "lazy";
});


// ===============================
// COPYRIGHT YEAR
// ===============================

const copyright = document.querySelector(".copyright");

if (copyright) {

    copyright.innerHTML =
        `© ${new Date().getFullYear()} JIT MUSIC EVENT | All Rights Reserved.`;

}


// ===============================
// FLOATING CARD EFFECT
// ===============================

document.querySelectorAll(
".service-card,.why-card,.testimonial-card"
).forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";
        card.style.transition = ".35s";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";

    });

});


// ===============================
// PAGE FADE IN
// ===============================

window.addEventListener("load", () => {

    document.body.style.opacity = "0";
    document.body.style.transition = "opacity .8s";

    setTimeout(() => {

        document.body.style.opacity = "1";

    }, 100);

});


// ===============================
// CLOSE MENU OUTSIDE CLICK
// ===============================

document.addEventListener("click", (e) => {

    if (menu && nav) {

        if (!nav.contains(e.target) &&
            !menu.contains(e.target)) {

            nav.classList.remove("active");

        }

    }

});


// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target =
            document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth",
            block: "start"

        });

    });

});


// ===============================
// CONSOLE BRANDING
// ===============================

console.clear();

console.log(
"%cJIT MUSIC EVENT",
"font-size:28px;color:#f4b400;font-weight:bold;"
);

console.log(
"%cDeveloped by JIT MUSIC EVENT",
"font-size:15px;color:#00d4ff;"
);


// ===============================
// WEBSITE READY
// ===============================

console.log("====================================");
console.log("Website Loaded Successfully 🚀");
console.log("Booking Form      ✓");
console.log("Hero Slider       ✓");
console.log("Gallery           ✓");
console.log("Counter           ✓");
console.log("Navbar            ✓");
console.log("Responsive        ✓");
console.log("Google Sheets     ✓");
console.log("====================================");
// ===============================
// WHATSAPP FLOAT BUTTON
// ===============================

const whatsapp = document.createElement("a");

whatsapp.href = "https://wa.me/919999999999"; // अपना नंबर डालो
whatsapp.target = "_blank";
whatsapp.className = "whatsapp-btn";
whatsapp.innerHTML = '<i class="fa-brands fa-whatsapp"></i>';

document.body.appendChild(whatsapp);


// ===============================
// CALL BUTTON
// ===============================

const callBtn = document.createElement("a");

callBtn.href = "tel:+919999999999"; // अपना नंबर डालो
callBtn.className = "call-btn";
callBtn.innerHTML = '<i class="fa-solid fa-phone"></i>';

document.body.appendChild(callBtn);


// ===============================
// HIDE LOADER IF ANY ERROR
// ===============================

window.onerror = function () {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.display = "none";

    }

};
