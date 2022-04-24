const inputText = document.querySelector('#validation-input');
const dataLength = inputText.getAttribute("data-length");

inputText.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  const inputDatalength = event.currentTarget.value.length === Number(dataLength);
 
  inputDatalength
    ? inputText.classList.add("valid") & inputText.classList.remove("invalid")
    : inputText.classList.add("invalid") & inputText.classList.remove("valid");

}