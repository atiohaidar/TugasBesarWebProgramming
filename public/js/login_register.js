const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const submitButton = document.getElementById('SignUp');
const container = document.getElementById('container');
const identitasContainer = document.querySelector('.identitas-container');
const signUpContainer = document.querySelector('.sign-up-container');
const signContainer = document.querySelector('.sign-in-container');
const overlayContainer = document.querySelector('.overlay-container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
    document.title = "Sign Up";
    identitasContainer.style.display = 'none';
    signContainer.style.display = 'none';
    overlayContainer.style.display = 'block';
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
    document.title = "Login";
    identitasContainer.style.display = 'none';
    signContainer.style.display = 'block';
    overlayContainer.style.display = 'block';
});

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    container.classList.remove("right-panel-active");
    document.title = "Identitas Lengkap";
    identitasContainer.style.display = 'block';
    signContainer.style.display = 'none';
    signUpContainer.style.display = 'none';
    overlayContainer.style.display = 'none';
});