//random.js

function random_text()
{};
var random_text = new random_text();
// Set the number of text strings to zero to start
var number = 0;
// Incremental list of all possible Text
random_text[number++] = "<img src=/assets/photo_1.jpeg>"
random_text[number++] = "<img src=/assets/photo_2.jpeg>"
random_text[number++] = "<img src=/assets/photo_3.jpeg>"
random_text[number++] = "<img src=/assets/photo_4.jpeg>"
random_text[number++] = "<img src=/assets/photo_5.jpeg>"
random_text[number++] = "<img src=/assets/photo_6.jpeg>"
random_text[number++] = "<img src=/assets/photo_7.jpeg>"
// Create a random number with limits based on the number
// of possible random text strings
var random_number = Math.floor(Math.random() * number);
// Write out the random text to the browser
document.write(random_text[random_number]);