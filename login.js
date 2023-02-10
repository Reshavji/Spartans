const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
function openForm() {
	document.getElementById("myForm").style.display = "block";
	document.getElementById("first").style.display = "none";
  }
  
  function closeForm() {
	document.getElementById("myForm").style.display = "none";
	document.getElementById("first").style.display = "block";
  }
  