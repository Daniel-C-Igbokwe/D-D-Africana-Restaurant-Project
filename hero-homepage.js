    var i = 0; //Start Point
    var images = [];
    var time = 3000;

    // Image List
    images[0] = "./images/5-1152x1536.jpg";
    images[1] = "./images/download-17.jpeg";
    images[2] = "./images/download-1.jpg";

    // Change Image
    function changeImg() {
        document.slide.src = images[i];

        if(i < images.length - 1) {
            i++;
        } else{
            i = 0; 
        }

        setTimeout("changeImg()", time);

        window.onload = "changeImg"
    }


