var i = 0;
var images　= [];
var time = 3000;

console.log("Hello world");
//image list

images[0] = 'image1.jpeg';
images[1] = 'image2.jpeg';
images[2] = 'image3.jpeg';
images[3] = 'image4.jpeg';
images[4] = 'image5.jpg';

//change image

function changeImg(){
document.slide.src = images[i];

if (i< images.length- 1){
    i++;


} else{

    i = 0;
}
setTimeout("changeImg()",time);
}

window.onload = changeImg;