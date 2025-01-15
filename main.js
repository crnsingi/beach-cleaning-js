document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name && email && message) {
      alert(`Thank you, ${name}! Your message has been sent.`);
      // Reset form
      e.target.reset();
    } else {
      alert('Please fill out all fields.');
    }
  });
  
let a = document.createElement('a');
let linkText = document.createTextNode("home");
a.appendChild(linkText);
a.title = "home";
a.href = "http://beachcleaning.com";
document.body.appendChild(a);

// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}