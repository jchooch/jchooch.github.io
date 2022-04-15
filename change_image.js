//change_image.js

function changeImage() {
        if (document.getElementById("imgClickAndChange").src == "{{site.photo_1}}") 
        {
            document.getElementById("imgClickAndChange").src = "{{site.photo_2}}";
        }
        elif (document.getElementById("imgClickAndChange").src == "{{site.photo_2}}")
        {
            document.getElementById("imgClickAndChange").src = "{{site.photo_3}}"
        }
        elif (document.getElementById("imgClickAndChange").src == "{{site.photo_3}}")
        {
            document.getElementById("imgClickAndChange").src = "{{site.photo_4}}"
        }
        elif (document.getElementById("imgClickAndChange").src == "{{site.photo_4}}")
        {
            document.getElementById("imgClickAndChange").src = "{{site.photo_5}}"
        }
        elif (document.getElementById("imgClickAndChange").src == "{{site.photo_5}}")
        {
            document.getElementById("imgClickAndChange").src = "{{site.photo_6}}"
        } 
        elif (document.getElementById("imgClickAndChange").src == "{{site.photo_6}}")
        {
            document.getElementById("imgClickAndChange").src = "{{site.photo_7}}"
        } 
    }