const boxMenButtons = document.querySelectorAll('.boxWomen');
const checkboxes = document.querySelectorAll('.checkboxes');
const cancelButtons = document.querySelectorAll('.cancel');
boxMenButtons.forEach(button => {
    button.addEventListener('click', function () {
      const currentCheckboxes = this.parentNode.nextElementSibling;
      checkboxes.forEach(checkbox => {
        if (checkbox !== currentCheckboxes) {
          checkbox.style.display = 'none';
        }
      });
      currentCheckboxes.style.display = currentCheckboxes.style.display === 'block' ? 'none' : 'block';
    });
  });
  
  cancelButtons.forEach(cancelButton => {
    cancelButton.addEventListener('click', function () {
      const checkboxesToHide = this.parentNode.parentNode;
      checkboxesToHide.style.display = 'none';
    });
  });
  
  document.addEventListener('click', function (event) {
    if (!event.target.closest('.forWomen')) {
      checkboxes.forEach(checkbox => {
        checkbox.style.display = 'none';
      });
    }
  });

  // APPLY butonuna tıklandığında filtreleme işlemini gerçekleştiren kod
var applyButton = document.querySelector(".apply");

applyButton.addEventListener("click", function() {
  var cards = document.getElementsByClassName("card");
  var filter = "QUARTZ";

  for (var i = 0; i < cards.length; i++) {
    var cardText = cards[i].querySelector(".cardText p").textContent;
    var vehicle4Checkbox = document.getElementById("vehicle4");

    if (vehicle4Checkbox.checked && cardText === filter) {
      cards[i].style.display = "block"; // Filtreye uyan kartları göster
    } else {
      cards[i].style.display = "none"; // Diğer kartları gizle
    }
  }
});
