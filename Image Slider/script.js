const slider = document.querySelector(".image_slider").children;
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const totalImages = slider.length;
let index = 0;

prevBtn.addEventListener("click" , function(){
    console.log("prev");
})
nextBtn.addEventListener("click" , function(){
    console.log("next");
})


function nextImage(direction){
    if(direction == 'next'){
        index++;
        if(index == totalImages){
            index = 0;
        }
    }else {
        if(index == 0){
            index = totalImages -1;
        } else {
            index--;
        }
    }

    for(let i = 0; i<slider.length; i++){
        slider[i].classList.remove('main');
    }
    slider[index].classList.add('main');
}