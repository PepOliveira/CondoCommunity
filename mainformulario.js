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
  if (selectedOption !== 'Selecione sua reclamação') {
    this.options[0].remove(); // Remove a opção de placeholder
  }
});


