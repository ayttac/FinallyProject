// const accountTable = document.getElementById('accountTable');
// const data = JSON.parse(localStorage.getItem("arr"));

// if (data) {
//   data.forEach((account, index) => {
//     const row = document.createElement('tr');
//     row.innerHTML = `
//       <td>${index + 1}</td>
//       <td>${account.namePrefix}</td>
//       <td>${account.firstName}</td>
//       <td>${account.lastName}</td>
//       <td>${account.email}</td>
//       <td>${account.password}</td>
//       <td>${account.confirmPassword}</td>
//       <td><button class="deleteBtn" onclick="deleteAccount(${index})">Delete</button></td>
//     `;
//     accountTable.appendChild(row);
//   });
// }

// function deleteAccount(index) {
//   const data = JSON.parse(localStorage.getItem("arr"));
//   if (data && data.length > index) {
//     data.splice(index, 1);
//     localStorage.setItem("arr", JSON.stringify(data));
//     location.reload(); // Sayfayı yenilemek için
//   }
// }

// let users = [
//     {
//       name: "admin",
//       password: "123456",
//     },
   
//   ];


// function login() {
//     let username = document.getElementById("username").value;
//     let password = document.getElementById("password").value;
  
//     if (username === "name" && password === "password") {
//       document.getElementById("loginContainer").style.display = "none";
//       document.getElementById("accountTable").style.display = "block";
//     } else {
//       alert("DÜZGÜN DEYİL");
//     }
//   }
//   document.addEventListener("DOMContentLoaded", populateTable);



const accountTable = document.getElementById('accountTable');
const data = JSON.parse(localStorage.getItem("arr"));

if (data) {
  data.forEach((account, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${account.namePrefix}</td>
      <td>${account.firstName}</td>
      <td>${account.lastName}</td>
      <td>${account.email}</td>
      <td>${account.password}</td>
      <td>${account.confirmPassword}</td>
      <td><button class="deleteBtn" onclick="deleteAccount(${index})">Delete</button></td>
    `;
    accountTable.appendChild(row);
  });
}

function deleteAccount(index) {
  const data = JSON.parse(localStorage.getItem("arr"));
  if (data && data.length > index) {
    data.splice(index, 1);
    localStorage.setItem("arr", JSON.stringify(data));
    location.reload(); // Sayfayı yenilemek için
  }
}

function login() {
  const username = document.getElementById("name").value;
  const password = document.getElementById("password").value;

  const users = [
    {
      name: "admin",
      password: "123456",
    }
  ];

  const foundUser = users.find(user => user.name === username && user.password === password);
  if (foundUser) {
    document.getElementById("loginContainer").style.display = "none";
    document.getElementById("accountTable").style.display = "block";
  } else {
    alert("The information entered is incorrect!");
  }
}
