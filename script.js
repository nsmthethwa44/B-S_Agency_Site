// toggle boh menu and navbar when menu button is clicked
let menu = document.querySelector(".menuImg");
let navbar = document.querySelector(".navbar");
menu.onclick = () =>{
  menu.classList.toggle("closeImg");
  navbar.classList.toggle("active");
}

// when scroll top remove navbar and closeImg
// and when the window scroll is greater than 200, show a scrollTop button
// or else hide scrollTop button 
window.onscroll = () =>{
  menu.classList.remove("closeImg");
  navbar.classList.remove("active");

  let scrollTop = document.querySelector(".scrollTop");
  if (window.scrollY > 200){
    scrollTop.style.display ="flex";
  }else{
    scrollTop.style.display ="none";
  }
}

// when nav link is clicked set and remove active class
let links = document.querySelectorAll(".header .navbar .nav li a");
Array.from(links).forEach((item, index) =>{
  item.onclick = (e) =>{
let currentLink = document.querySelector(".header .navbar .nav li a.active");
    currentLink.classList.remove("active");
    e.target.classList.add("active");
  }
})

// review image when clicked set and remove active class
// filter comments and ratings
let reviews = document.querySelectorAll(".reviewsImg .review");
let reviewBox = document.querySelectorAll(".comment .box");
Array.from(reviews).forEach((item, index) =>{
  item.onclick = (e) =>{
    let currentReview = document.querySelector(".reviewsImg .review.active");
    currentReview.classList.remove("active");
    e.target.classList.add("active");

    let filter = e.target.dataset.filter;
    reviewBox.forEach((item)  =>{
    if (item.classList.contains(filter)){
      item.style.display = "block";
    }else{
      item.style.display = "none";
    }
   })
  }
})