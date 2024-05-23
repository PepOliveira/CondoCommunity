// mainformulario.js

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

const selectElement = document.getElementById('reclamacao');

selectElement.addEventListener('change', function() {
  const selectedOption = this.options[this.selectedIndex].text;
  if (selectedOption !== 'Selecione sua emergência') {
    this.options[0].remove(); // Remove a opção de placeholder
  }
});

// Pop-up logic
document.getElementById('emergencyForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Show the pop-up
  const popup = document.getElementById('popup');
  popup.style.display = 'block';

  // Close the pop-up when the close button is clicked
  const closeBtn = document.querySelector('.close-btn');
  closeBtn.onclick = function() {
    popup.style.display = 'none';
  };

  // Close the pop-up when clicking outside of the pop-up
  window.onclick = function(event) {
    if (event.target == popup) {
      popup.style.display = 'none';
    }
  };
});
