const InputText = document.querySelector('#validation-input');
InputText.addEventListener('blur', onBlur);



function onBlur() {
    if (InputText.value.length === +InputText.dataset.length) {
        this.classList.remove("valid");
        this.classList.add("invalid");
    }
    else {
    this.classList.remove("invalid");
    this.classList.add("valid");
  }
}