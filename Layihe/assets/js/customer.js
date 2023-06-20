// const title = document.querySelector(".titleC");
// const menu = document.querySelector(".brandCustomerMenu");
// const nav = document.querySelector(".nav");
// const exit = document.querySelector(".exitC");
// menu.addEventListener("click",() =>{
//     nav.style.display = nav.style.display === 'none' ? 'block' : 'none';
//     title.style.display = title.style.display === 'none' ? 'block' : 'block';
// })

// exit.addEventListener("click",() =>{
//     nav.style.display = nav.style.display === 'none' ? 'block' : 'block';
//     title.style.display = title.style.display === 'none' ? 'block' : 'none';
// });
////
const createNew = document.querySelector(".createNew");
const personal = document.querySelector(".personal");
const resgisteredCustomers = document.querySelector(".resgisteredCustomers");


createNew.addEventListener("click", (e) => {
  e.preventDefault();
  if (personal.style.display == "block") {
    personal.style.display = "none";
    resgisteredCustomers.style.display = "block";
  }
  else {
    personal.style.display = "block";
    resgisteredCustomers.style.display = "none";

  }
})

const createAccountButton = document.querySelector('.createAccount');
const namePrefix = document.querySelector('.personalLogin .name');
const firstName = document.querySelector('.personalLogin .email');
const lastName = document.querySelector('.personalLogin .password');
const email = document.querySelector('.informationSign .name');
const password = document.querySelector('.informationSign .email');
const confirmPassword = document.querySelector('.informationSign .password');
let arr = [];

createAccountButton.addEventListener('click', function (e) {
  e.preventDefault();

  if (namePrefix.value === '' || firstName.value === '' || lastName.value === '' ||
  email.value === '' || password.value === '' || confirmPassword.value === '') {
  alert('Complete the information');
  return;
}

if (password.value !== confirmPassword.value) {
  alert('Password is not the same');
  return;
}

  if (JSON.parse(localStorage.getItem("arr")) !== null) {
    arr = JSON.parse(localStorage.getItem("arr"));
  }
  
  let obj = {
    namePrefix: namePrefix.value,
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
    confirmPassword: confirmPassword.value,
  };

  arr.push(obj);

  localStorage.setItem("arr", JSON.stringify(arr));
  
  namePrefix.value = "";
  firstName.value = "";
  lastName.value = "";
  email.value = "";
  password.value = "";
  confirmPassword.value = "";
});




