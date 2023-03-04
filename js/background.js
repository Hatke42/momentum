const images = ["0.jpg", "1.jpg", "2.jpg"];

const choosenImage = images[Math.floor(Math.random() * images.length)];

const img = document.createElement("img");

img.src = `img/${choosenImage}`;
img.width = "1000";
img.height = "1000";

document.body.appendChild(img);

// document.body.style.backgroundImage = `url("img/${choosenImage}")`;
