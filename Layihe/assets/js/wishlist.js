const wishlist_container = document.getElementById("wishlist_container");
let wishlist_arr = [];
if (localStorage.getItem("wishlist") !== null) {
  wishlist_arr = JSON.parse(localStorage.getItem("wishlist"));
}

console.log("wishlist array", wishlist_arr);
const div = document.querySelector(".cardBox");

wishlist_arr.forEach((element) => {
  const card = document.createElement("div");
  const cardImg = document.createElement("div");
  const picture = document.createElement("img");
  cardImg.appendChild(picture);

  const cardText = document.createElement("h4");
  const about = document.createElement("p");
  const btn = document.createElement("button");
  const trashIcon = document.createElement("i");

  card.className = "img";
  cardImg.className = "cardImg";
  cardText.className = "imgText";
  cardText.className = "cardAbout";
  picture.src = element.img_url;
  cardText.innerText = element.text;
  about.innerText = element.about;
  btn.className = "like";

  trashIcon.className = "fa-solid fa-trash";

  btn.appendChild(trashIcon);
  btn.style.background="none";
  btn.style.border="none";
 
  btn.onclick = () => {
    console.log(element.id);
    wishlist_arr = wishlist_arr.filter((x) => x.id !== element.id);
    localStorage.setItem("wishlist", JSON.stringify(wishlist_arr));
    btn.parentElement.remove();
  };

  div.append(card);
  card.append(cardImg, picture, cardText, about, btn);
  wishlist_container.append(div);
});
