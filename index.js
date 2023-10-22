function edu() {
    let x = document.getElementById("educationContent");
    let y= document.getElementById("hobbyContent");
    let z = document.getElementById("skillContent");
    x.style.display = "block";
    y.style.display = "none";
    z.style.display = "none";
}
function hobby() {
    let x = document.getElementById("educationContent");
    let y= document.getElementById("hobbyContent");
    let z = document.getElementById("skillContent");
    y.style.display = "block";
    x.style.display = "none";
    z.style.display = "none";
}
function skill() {
    let x = document.getElementById("educationContent");
    let y= document.getElementById("hobbyContent");
    let z = document.getElementById("skillContent");
    z.style.display = "block";
    y.style.display = "none";
    x.style.display = "none";
}
function hrefFunction(){
    window.location.href = "https://projectsimon.netlify.app/";
}