// Ambil elemen-elemen yang dibutuhkan
const logoutModal = document.querySelector('.logoutModal');
const openLogoutModalLink = document.querySelector('#openLogoutModal');
const cancelButton = document.querySelector('.cancelButton');
const yesButton = document.querySelector('.yesButton');

// Fungsi untuk menampilkan modal
function openLogoutModal() {
    logoutModal.style.display = 'block';
}

// Fungsi untuk menyembunyikan modal
function closeLogoutModal() {
    logoutModal.style.display = 'none';
}

// Tambahkan event listener untuk menampilkan modal saat tautan "Logout" ditekan
openLogoutModalLink.addEventListener('click', openLogoutModal);

// Tambahkan event listener untuk menyembunyikan modal saat tombol "Cancel" atau "YES" ditekan
cancelButton.addEventListener('click', closeLogoutModal);
yesButton.addEventListener('click', closeLogoutModal);
