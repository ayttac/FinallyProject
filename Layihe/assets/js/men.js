const wishlist_btn = document.querySelectorAll(".heartIcon");
let wishlist_arr = [];

window.onload = function () {
  if (localStorage.getItem("wishlist") !== null) {
    wishlist_arr = JSON.parse(localStorage.getItem("wishlist"));
  }
};


const heartIcon = document.querySelectorAll('.heartIcon');
heartIcon.forEach(element => {
  element.addEventListener("click", () => {
    element.classList.toggle("fa-solid")
    if (element.classList.contains("fa-solid")) {
      element.style.color = "red";
    
    } else {
      element.style.color = "black";
    }
  })
});

wishlist_btn.onclick = () => {
  if (wishlist_arr.find((x) => x.id == data.id) === undefined) {
    wishlist_arr.push(data);
    wishlist_btn.style.backgroundColor = "red";
  } else {
    wishlist_arr = wishlist_arr.filter((x) => x.id !== data.id);
    wishlist_btn.style.backgroundColor = "white";
  }
  localStorage.setItem("wishlist", JSON.stringify(wishlist_arr));
};

function getCard() {
  fetch('http://localhost:3000/men')
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element) => {
        createCard(element);
      });
    });
}
getCard();
// eger data varsa localstorage


function createCard(element) {
  const div = document.querySelector('.cardBox');
  const card = document.createElement('div');
  const cardImg = document.createElement('div');
  const picture = document.createElement('img');
  const wishlist_btn = document.createElement('button');
  const about = document.createElement('p');
  const cardText = document.createElement('h4');
  const heartIcon = document.createElement('i');

  card.className = 'img';
  cardImg.className = 'cardImg';
  cardText.className = 'imgText';
  cardText.className = 'cardAbout';
  picture.src = element.img_url;
  cardText.innerText = element.text;
  about.innerText = element.about;
  heartIcon.className = 'fa-regular fa-heart';
  wishlist_btn.className = 'like';

  // appen 
 wishlist_btn.style.background="none";
 wishlist_btn.style.border="none";


  if (wishlist_arr.find((x) => x.id == element.id) !== undefined) {
    heartIcon.classList.add('fa-solid');
    heartIcon.style.color = 'red';
  }

  wishlist_btn.appendChild(heartIcon);
  // wishlist

  wishlist_btn.onclick = () => {
    if (wishlist_arr.find((x) => x.id == element.id) === undefined) {
      wishlist_arr.push(element);
      heartIcon.classList.add('fa-solid');
      heartIcon.style.color = 'red';
    } else {
      wishlist_arr = wishlist_arr.filter((x) => x.id !== element.id);
      heartIcon.classList.remove('fa-solid');
      heartIcon.style.color = 'black';
    }
    localStorage.setItem('wishlist', JSON.stringify(wishlist_arr));
  };


  cardImg.appendChild(picture);
  card.appendChild(cardImg);
  card.appendChild(cardText);
  card.appendChild(about);
  card.appendChild(wishlist_btn);
  div.appendChild(card);
};



