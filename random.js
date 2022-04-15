//random.js

function random_text()
{};
var random_text = new random_text();
var number = 0;
random_text[number++] = "<img src='/assets/photo_1.jpeg' class='img-fluid rounded float-left' style='width:30px;height:42px;' alt='countenance'>"
random_text[number++] = "<img src='/assets/photo_1.jpeg' class='img-fluid rounded float-left' style='width:30px;height:42px;' alt='countenance'>"
random_text[number++] = "<img src='/assets/photo_2.jpeg' class='img-fluid rounded float-left' style='width:30px;height:42px;' alt='countenance'>"
random_text[number++] = "<img src='/assets/photo_2.jpeg' class='img-fluid rounded float-left' style='width:30px;height:42px;' alt='countenance'>"
random_text[number++] = "<img src='/assets/photo_3.jpeg' class='img-fluid rounded float-left' style='width:30px;height:42px;' alt='countenance'>"
random_text[number++] = "<img src='/assets/photo_3.jpeg' class='img-fluid rounded float-left' style='width:30px;height:42px;' alt='countenance'>"
random_text[number++] = "<img src='/assets/photo_4.jpeg' class='img-fluid rounded float-left' style='width:30px;height:42px;' alt='countenance'>"
random_text[number++] = "<img src='/assets/photo_4.jpeg' class='img-fluid rounded float-left' style='width:30px;height:42px;' alt='countenance'>"
random_text[number++] = "<img src='/assets/photo_5.jpeg' class='img-fluid rounded float-left' style='width:30px;height:42px;' alt='countenance'>"
random_text[number++] = "<img src='/assets/photo_6.jpeg' class='img-fluid rounded float-left' style='width:30px;height:42px;' alt='countenance'>"
random_text[number++] = "<img src='/assets/photo_7.jpeg' class='img-fluid rounded float-left' style='width:30px;height:42px;' alt='countenance'>"
random_text[number++] = "<img src='/assets/photo_8.jpeg' class='img-fluid rounded float-left' style='width:30px;height:42px;' alt='countenance'>"
var random_number = Math.floor(Math.random() * number);
document.write(random_text[random_number]);