const snackbar = document.querySelector("[data-js=snackbar]");
const floatField = document.getElementById('floatField');
const floatContainer = document.getElementById('floatContainer');
const modal = document.getElementById("my-modal");

floatField.addEventListener('focus', () => {
  floatContainer.classList.add('active');
});
floatField.addEventListener('blur', () => {
  floatContainer.classList.remove('active');
});

function handleSnackbarAction(){
    snackbar.classList.add("snackbar-open");
    setTimeout(() =>{
        snackbar.classList.remove("snackbar-open")
        },5000);
}

function handleModalAction(){
  console.log("modal clicked");
modal.classList.add("modal-open");
  setTimeout(() =>{
      modal.classList.remove("modal-open")
      },5000);
}


//SLIDER - COMPONENT
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}