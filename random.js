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
/*
var num = Math.random();
if(num < 0.175) var rand_num = 1;
else if(num < 0.350) var rand_num = 2;
else if(num < 0.500) var rand_num = 3;
else if(num < 0.650) var rand_num = 4;
else if(num < 0.725) var rand_num = 5;
else if(num < 0.825) var rand_num = 6;
else if(num < 0.900) var rand_num = 7;
else var rand_num = 8;
*/
var random_number = Math.floor(Math.random() * number);
document.write(random_text[random_number]);