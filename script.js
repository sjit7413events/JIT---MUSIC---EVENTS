// ===============================
// JIT MUSIC EVENT
// ===============================

// ⚠️ Yahan apna Apps Script URL paste karo
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzGT7pEpFZQCKXgv_jwaPpPen38k3erxYB5DVdLKhjIwNTG7vjGYHToGcKYhNoIoeDegw/exec";

const form = document.getElementById("bookingForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

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

    fetch(SCRIPT_URL,{
        method:"POST",
        body:JSON.stringify(data)
    })

    .then(res=>res.text())

    .then(result=>{

        alert("🎉 Booking Submitted Successfully!\n\nJIT MUSIC EVENT will contact you shortly.");

        form.reset();

    })

    .catch(error=>{

        alert("❌ Error! Please try again.");

        console.log(error);

    });

});