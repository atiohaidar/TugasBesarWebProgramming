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

document.addEventListener('DOMContentLoaded', function () {
    var fakultasSelect = document.getElementById('fakultas');
    var prodiSelect = document.getElementById('prodi');

    fakultasSelect.addEventListener('change', function () {
        var selectedFakultas = fakultasSelect.value;
        prodiSelect.innerHTML = '<option value="" disabled selected>Select your program</option>';

        var prodiOptions = [];

        switch (selectedFakultas) {
            case 'FTE':
                prodiOptions = ['Teknik Elektro', 'Teknik Telekomunikasi', 'Teknik Komputer'];
                break;
            case 'FRI':
                prodiOptions = ['Teknik Industri', 'Sistem Informasi', 'Teknik Logistik'];
                break;
            case 'FIF':
                prodiOptions = ['Informatika', 'Rekayasa Perangkat Lunak', 'Teknologi Informasi', 'Data Science'];
                break;
            case 'FIK':
                prodiOptions = ['Desain Komunikasi Visual', 'Desain Interior', 'Fashion Textile Design'];
                break;
            case 'FKB':
                prodiOptions = ['Administrasi Bisnis', 'Ilmu Komunikasi', 'Hubungan Masyarakat'];
                break;
            case 'FEB':
                prodiOptions = ['Akuntansi', 'Manajemen', 'Manajemen Bisnis TI'];
                break;
            case 'FIT':
                prodiOptions = ['Teknik Informatika', 'Perhotelan', 'Sistem Informasi Akuntansi'];
                break;
            default:
                break;
        }

        addProdiOptions(prodiOptions);
    });
});

function addProdiOptions(options) {
    var prodiSelect = document.getElementById('prodi');
    options.forEach(function (option) {
        var optionElement = document.createElement('option');
        optionElement.value = option;
        optionElement.textContent = option;
        prodiSelect.appendChild(optionElement);
    });
}