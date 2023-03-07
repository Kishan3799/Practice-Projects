const reviews = [
    {
        id: 1, 
        author: "John Smith",
        image_url: "https://randomuser.me/api/portraits/men/1.jpg",
        job: "Software Engineer", 
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu nisl eget urna euismod fermentum. Aliquam erat volutpat. Duis sed eros non dolor convallis maximus. Sed vel lobortis orci. Nunc id convallis lorem. Vivamus at orci vel ante scelerisque sollicitudin. Suspendisse potenti. Suspendisse consectetur suscipit nulla eget euismod."
    },
    { 
        id: 2,
        author: "Emily Johnson", 
        image_url: "https://randomuser.me/api/portraits/women/2.jpg", 
        job: "Marketing Manager", 
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu nisl eget urna euismod fermentum. Aliquam erat volutpat. Duis sed eros non dolor convallis maximus. Sed vel lobortis orci. Nunc id convallis lorem. Vivamus at orci vel ante scelerisque sollicitudin. Suspendisse potenti. Suspendisse consectetur suscipit nulla eget euismod." 
        
    }, 
         
    {   id: 3, 
        author: "Michael Brown",
        image_url: "https://randomuser.me/api/portraits/men/3.jpg", 
        job: "Graphic Designer",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu nisl eget urna euismod fermentum. Aliquam erat volutpat. Duis sed eros non dolor convallis maximus. Sed vel lobortis orci. Nunc id convallis lorem. Vivamus at orci vel ante scelerisque sollicitudin. Suspendisse potenti. Suspendisse consectetur suscipit nulla eget euismod." 
        
    },
    
    { 
        id: 4, 
        author: "Jessica Lee", 
        image_url: "https://randomuser.me/api/portraits/women/4.jpg", 
        job: "Product Manager", 
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu nisl eget urna euismod fermentum. Aliquam erat volutpat. Duis sed eros non dolor convallis maximus. Sed vel lobortis orci. Nunc id convallis lorem. Vivamus at orci vel ante scelerisque sollicitudin. Suspendisse potenti. Suspendisse consectetur suscipit nulla eget euismod." 

    }, 
    
    { 
        id: 5,
        author: "William Davis",
        image_url: "https://randomuser.me/api/portraits/men/5.jpg", 
        job: "Data Scientist",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu nisl eget urna euismod fermentum. Aliquam erat volutpat. Duis sed eros non dolor convallis maximus. Sed vel lobortis orci. Nunc id convallis lorem. Vivamus at orci vel ante scelerisque sollicitudin. Suspendisse potenti. Suspendisse consectetur suscipit nulla eget euismod."
     }
]

//select item
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevbtn = document.querySelector(".prev-button");
const nextbtn = document.querySelector(".next-button");
const randombtn = document.querySelector(".random-button");

//start item
let currentItem = 2;

//load intial itme 
window.addEventListener("DOMContentLoaded", function () {
   showPerson()
}) 

//shwo person
function showPerson(){
    const item = reviews[currentItem];
    img.src  = item.image_url
    author.textContent = item.author
    job.textContent = item.job
    info.textContent = item.info
}

//next button function
nextbtn.addEventListener("click" ,function () {
    currentItem++
    if(currentItem > reviews.length-1){
        currentItem = 0;
    }
    showPerson()
})

//prev button function
prevbtn.addEventListener("click" ,function () {
    currentItem--
    if(currentItem < 0){
        currentItem = reviews.length-1;
    }
    showPerson()
})

//reandom perosn
randombtn.addEventListener("click", function(){
    currentItem = Math.floor(Math.random() * reviews.length)
    showPerson();
})