const hex = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color')

btn.addEventListener("click", function(){

    // const randomNumber = getRandomColor();
    // document.body.style.backgroundColor = colors[randomNumber];
    // color.textContent = colors[randomNumber];   
    // console.log(randomNumber);  

    let hexCodeColor = '#';
    for (let index = 0; index < 6; index++) {
        hexCodeColor += hex[getRandomColor()];
    }
    color.textContent = hexCodeColor;
    document.body.style.backgroundColor = hexCodeColor
})

function getRandomColor(){
    return Math.floor(Math.random() * hex.length); 
}
