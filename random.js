//random.js

function random_text()
{};
var random_text = new random_text();
// Set the number of text strings to zero to start
var number = 0;
// Incremental list of all possible Text
random_text[number++] = "<img src='/assets/photo_1.jpeg' class='img-fluid rounded float-left' alt='business'>"
random_text[number++] = "<img src='/assets/photo_1_moustache.jpeg' class='img-fluid rounded float-left' alt='monsieur business'>"
random_text[number++] = "<img src='/assets/photo_2.jpeg' class='img-fluid rounded float-left' alt='nyc'>"
random_text[number++] = "<img src='/assets/photo_3.jpeg' class='img-fluid rounded float-left' alt='blue'>"
random_text[number++] = "<img src='/assets/photo_4.jpeg' class='img-fluid rounded float-left' alt='joshua tree'>"
random_text[number++] = "<img src='/assets/photo_5.jpeg' class='img-fluid rounded float-left' alt='tent'>"
random_text[number++] = "<img src='/assets/photo_6.jpeg' class='img-fluid rounded float-left' alt='pandemic couture'>"
random_text[number++] = "<img src='/assets/photo_7.jpeg' class='img-fluid rounded float-left' alt='asheville'>"
// Create a random number with limits based on the number
// of possible random text strings
function getRandom(){
  var num=Math.random();
  if(num < 0.175) return 1;		//p=0.175	(body)
  elif(num < 0.350) return 2;	//p=0.175	(monsieur)
  elif(num < 0.500) return 3;	//p=0.150	(nyc)
  elif(num < 0.650) return 4;	//p=0.150	(head)
  elif(num < 0.725) return 5;	//p=0.075	(joshua)
  elif(num < 0.825) return 6;	//p=0.100	(tent)
  elif(num < 0.900) return 7;	//p=0.075	(couture)
  elif(num < 1.000) return 8;	//p=0.100	(asheville)
}
var rand_num = getRandom();
var random_number = Math.floor(Math.random() * number);
// Write out the random text to the browser
document.write(random_text[rand_num]);