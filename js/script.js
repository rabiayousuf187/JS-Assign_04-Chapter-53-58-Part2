// let img = document.getElementById("img_1");
let para = document.getElementById("para");

// let img_width = img.width;
// let img_height =img.height;
let size = 0, para_size;

// console.log("Get Img Width and Height === ", img_width, img_height);
console.log("Get  Para size === ", para_size);
function zoomin(){
    // img_width +=20;
    // img_height +=20;
    // img.style.width = img_width + "px";
    // img.style.height = img_height + "px";
    // console.log("img.style.width = size  === ", img_width);

    size += 10;
    console.log("para.style.fontSize = size  === ", size);
    para.style.fontSize = size + "px";

}

function zoomout(){
    // img_width -=20;
    // img_height -=20;
    // img.style.width = img_width + "px";
    // img.style.height = img_height + "px";
    // console.log("img.style.width = size  === ", img_width);
    
    size -= 10;
    console.log("para.style.fontSize = size  === ", size);
    para.style.fontSize = size + "px";

}