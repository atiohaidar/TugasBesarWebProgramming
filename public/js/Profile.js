// Ambil elemen-elemen yang dibutuhkan
const logoutModal = document.querySelector('.logoutModal');
const openLogoutModalLink = document.querySelector('#openLogoutModal');
const cancelButton = document.querySelector('.cancelButton');
const yesButton = document.querySelector('.yesButton');

// Fungsi untuk menampilkan popup
function openLogoutModal() {
    logoutModal.style.display = 'block';
}

// Fungsi untuk menyembunyikan popup
function closeLogoutModal() {
    console.log("hallo")
    logoutModal.style.display = 'none';
}

// Tambahkan event listener untuk menampilkan popup saat tautan "Logout" ditekan
openLogoutModalLink.addEventListener('click', openLogoutModal);

// Tambahkan event listener untuk menyembunyikan popup saat tombol "Cancel" atau "YES" ditekan
cancelButton.addEventListener('click', closeLogoutModal);
yesButton.addEventListener('click', closeLogoutModal);
