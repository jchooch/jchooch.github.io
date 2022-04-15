//random.js

function random_text()
{};
var random_text = new random_text();
var number = 0;
random_text[number++] = "<img src='{{site.photo_1}}' class='img-fluid rounded float-left' alt='countenance'>"
random_text[number++] = "<img src='{{site.photo_2}}' class='img-fluid rounded float-left' alt='countenance'>"
random_text[number++] = "<img src='{{site.photo_3}}' class='img-fluid rounded float-left' alt='countenance'>"
random_text[number++] = "<img src='{{site.photo_4}}' class='img-fluid rounded float-left' alt='countenance'>"
random_text[number++] = "<img src='{{site.photo_5}}' class='img-fluid rounded float-left' alt='countenance'>"
random_text[number++] = "<img src='{{site.photo_6}}' class='img-fluid rounded float-left' alt='countenance'>"
random_text[number++] = "<img src='{{site.photo_7}}' class='img-fluid rounded float-left' alt='countenance'>"
random_text[number++] = "<img src='{{site.photo_8}}' class='img-fluid rounded float-left' alt='countenance'>"
var random_number = Math.floor(Math.random() * number);
document.write(random_text[random_number]);