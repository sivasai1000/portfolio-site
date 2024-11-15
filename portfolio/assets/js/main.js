/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
  var navMenu = document.getElementById("myNavMenu");
  if (navMenu.style.display === "flex") {
      navMenu.style.display = "none";
  } else {
      navMenu.style.display = "flex";
  }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
  window.onscroll = function() {headerShadow()};

  function headerShadow() {
    const navHeader =document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";

    } else {

      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";

    }
  }

  document.getElementById("downloadBtn").addEventListener("click", function() {
    // Create a temporary anchor element
    const link = document.createElement("a");
    
    // Set the href attribute to the file URL
    link.href = "assets/resume/Final_resume.pdf";  // Ensure this file path is correct
    
    // Set the download attribute to ensure the file is downloaded
    link.setAttribute('download', 'Final_resume.pdf');  // Ensure correct file name
    
    // Append the link to the body
    document.body.appendChild(link);
    
    // Programmatically trigger the download
    link.click();
    
    // Remove the link from the document after the download starts
    document.body.removeChild(link);
});

document.getElementById("downloadBtn1").addEventListener("click", function() {
  // Create a temporary anchor element
  const link = document.createElement("a");
  
  // Set the href attribute to the file URL
  link.href = "assets/resume/Final_resume.pdf";  // Ensure this file path is correct
  
  // Set the download attribute to ensure the file is downloaded
  link.setAttribute('download', 'Final_resume.pdf');  // Ensure correct file name
  
  // Append the link to the body
  document.body.appendChild(link);
  
  // Programmatically trigger the download
  link.click();
  
  // Remove the link from the document after the download starts
  document.body.removeChild(link);
});
document.getElementById("downloadBtn2").addEventListener("click", function() {
  // Create a temporary anchor element
  const link = document.createElement("a");
  
  // Set the href attribute to the file URL
  link.href = "assets/resume/Final_resume.pdf";  // Ensure this file path is correct
  
  // Set the download attribute to ensure the file is downloaded
  link.setAttribute('download', 'Final_resume.pdf');  // Ensure correct file name
  
  // Append the link to the body
  document.body.appendChild(link);
  
  // Programmatically trigger the download
  link.click();
  
  // Remove the link from the document after the download starts
  document.body.removeChild(link);
});



  



/* ----- TYPING EFFECT ----- */
 var typingEffect = new Typed(".typedText",{
    strings : ["Full-Stack Developer","Front-End Developer","Back-End Developer"],
    loop : true,
    typeSpeed : 100, 
    backSpeed : 80,
    backDelay : 2000
 })


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
 const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true     
 })

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})

const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills() {
    let itemClass = this.parentNode.className

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close'
    }
    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})
/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

    }  else {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })
}

window.addEventListener('scroll', scrollActive)
function sendMail() {
  // Get form field values
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var message = document.getElementById("message").value.trim();

  // Email validation regex
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  // Check if fields are not empty
  if (!name) {
    alert("Please enter your name.");
    return;
  }

  if (!email) {
    alert("Please enter your email.");
    return;
  }

  // Check if email format is valid
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (!message) {
    alert("Please enter a message.");
    return;
  }

  // Prepare parameters for EmailJS
  var params = {
    name: name,
    email: email,
    message: message,
  };

  // EmailJS service and template IDs
  const serviceID = "service_mk6io1t";
  const templateID = "template_gvfqvxm";

  // Send the email
  emailjs.send(serviceID, templateID, params)
    .then(res => {
      // Clear form fields on successful submission
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Your message was sent successfully!");
    })
    .catch(err => console.log(err));
}
