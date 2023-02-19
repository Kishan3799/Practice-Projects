const divElem = document.getElementById("container");
function randomcolor() {
    return Math.floor(Math.random() * 255);
}

divElem.addEventListener('click' ,()=>{
    divElem.innerHTML = 'rgba('+ randomcolor() + ',' + randomcolor() + ',' + randomcolor() + ')'
    divElem.style.backgroundColor = 'rgba(' 
    + randomcolor() + ',' + randomcolor() 
    + ',' + randomcolor() + '\)'
})

// setInterval(() => {
//     divElem.innerHTML = 'rgba('+ randomcolor() + ',' + randomcolor() + ',' + randomcolor() + ')'
//     divElem.style.backgroundColor = 'rgba(' 
//     + randomcolor() + ',' + randomcolor() 
//     + ',' + randomcolor() + '\)'
// }, 1000);