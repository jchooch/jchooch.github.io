//random.js

function random_text()
{};
var random_text = new random_text();
var number = 0;
random_text[number++] = "<img src='/assets/photo_1.jpeg' class='img-fluid rounded float-left' alt='coat'>"
random_text[number++] = "<img src='/assets/photo_1.jpeg' class='img-fluid rounded float-left' alt='coat'>"
random_text[number++] = "<img src='/assets/photo_2.jpeg' class='img-fluid rounded float-left' alt='monsieur'>"
random_text[number++] = "<img src='/assets/photo_2.jpeg' class='img-fluid rounded float-left' alt='monsieur'>"
random_text[number++] = "<img src='/assets/photo_3.jpeg' class='img-fluid rounded float-left' alt='nyc'>"
random_text[number++] = "<img src='/assets/photo_3.jpeg' class='img-fluid rounded float-left' alt='nyc'>"
random_text[number++] = "<img src='/assets/photo_4.jpeg' class='img-fluid rounded float-left' alt='shirt'>"
random_text[number++] = "<img src='/assets/photo_4.jpeg' class='img-fluid rounded float-left' alt='shirt'>"
random_text[number++] = "<img src='/assets/photo_5.jpeg' class='img-fluid rounded float-left' alt='joshua'>"
random_text[number++] = "<img src='/assets/photo_6.jpeg' class='img-fluid rounded float-left' alt='tent'>"
random_text[number++] = "<img src='/assets/photo_7.jpeg' class='img-fluid rounded float-left' alt='asheville'>"
var random_number = Math.floor(Math.random() * number);
document.write(random_text[random_number]);