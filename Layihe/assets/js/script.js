const title = document.querySelector(".title");
const menu = document.querySelector(".brandCustomerMenu");
const header = document.querySelector("header");
const exit = document.querySelector(".exit");
menu.addEventListener("click", () => {
    header.style.display = header.style.display === 'none' ? 'block' : 'none';
    title.style.display = title.style.display === 'none' ? 'block' : 'block';
})

exit.addEventListener("click", () => {
    header.style.display = header.style.display === 'none' ? 'block' : 'block';
    title.style.display = title.style.display === 'none' ? 'block' : 'none';
})



$('.watchBox').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // prevArrow:``
});
$(".slick-next").text("");
//or
$(".slick-next").html("");

$(".slick-prev").text("");
//or
$(".slick-prev").html(""); 

const slick_arrow=document.querySelectorAll(".slick-arrow")
slick_arrow.innerText="";


const clickShow = document.querySelector(".clickShow");
const searchShow = document.querySelector(".searchShow");
const nav = document.querySelector("nav");
const exitSearch = document.querySelector(".btnExit");
const search = document.querySelector(".search");

search.addEventListener("click", () => {
    nav.style.display = nav.style.display === 'none' ? 'block' : 'none';
    clickShow.style.display = clickShow.style.display === 'none' ? 'block' : 'block';
})

exitSearch.addEventListener("click", () => {
    nav.style.display = nav.style.display === 'none' ? 'block' : 'block';
    clickShow.style.display = clickShow.style.display === 'none' ? 'block' : 'none';
})


const showMen = document.querySelector(".showMen");
const men = document.querySelector(".men");
const clickMenShow = document.querySelector(".clickMenShow");

showMen.addEventListener("click", (e) => {
     e.preventDefault();
    if (clickMenShow.style.display == "block") {
        clickMenShow.style.display = "none";
        nav.style.color = "white";
        nav.style.background="linear-gradient(to bottom, #25211e 0, rgba(37, 33, 30, 0) 100%)"
    }
    else {
        clickMenShow.style.display = "block";
        nav.style.backgroundColor = "white";
        nav.style.color = "black";
    }
})


const showWomen = document.querySelector(".showWomen");
const women = document.querySelector(".women");
const clickWomenShow = document.querySelector(".clickWomenShow");

showWomen.addEventListener("click", (e) => {
     e.preventDefault();
    if (clickWomenShow.style.display == "block") {
        clickWomenShow.style.display = "none";
        nav.style.color = "white";
        nav.style.background="linear-gradient(to bottom, #25211e 0, rgba(37, 33, 30, 0) 100%)"
    }
    else {
        clickWomenShow.style.display = "block";
        nav.style.backgroundColor = "white";
        nav.style.color = "black";
    }
})




const showCollection = document.querySelector(".showCollection");
const collections = document.querySelector(".collections");
const clickCollectionShow = document.querySelector(".clickCollectionShow");

showCollection.addEventListener("click", (e) => {
     e.preventDefault();
    if (clickCollectionShow.style.display == "block") {
        clickCollectionShow.style.display = "none";
        nav.style.color = "white";
        nav.style.background="linear-gradient(to bottom, #25211e 0, rgba(37, 33, 30, 0) 100%)"
    }
    else {
        clickCollectionShow.style.display = "block";
        nav.style.backgroundColor = "white";
        nav.style.color = "black";
    }
})