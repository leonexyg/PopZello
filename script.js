let counter = parseInt(localStorage.getItem('counter')) || 0; // Mengonversi nilai penyimpanan menjadi bilangan bulat, atau 0 jika tidak valid
document.getElementById('counter').innerText = counter;

document.getElementById('counter').addEventListener('click', function(event) {
    event.stopPropagation(); // Mencegah peristiwa perambahan
    clickSound.currentTime = 0; // Set ulang waktu audio ke awal
    clickSound.play(); // Memainkan suara klik
    this.classList.add('animate-mirrored'); // Tambahkan kelas animasi saat diklik
    setTimeout(() => {
        this.classList.remove('animate-mirrored'); // Hapus kelas animasi setelah selesai
    }, 200);

    // Mengubah angka menjadi kata "nan" jika tidak valid
    if (isNaN(counter)) {
        counter = "nan";
    } else {
        counter++; // Menambahkan satu ke nilai counter
    }
    localStorage.setItem('counter', counter); // Menyimpan nilai counter ke penyimpanan lokal
    document.getElementById('counter').innerText = counter; // Menetapkan teks counter
});

document.body.addEventListener('click', function(event) {
    // Mencegah penambahan jika yang diklik adalah counter atau judul
    if (event.target.id !== 'counter' && event.target.id !== 'title') {
        counter++; // Menambahkan satu ke nilai counter
        localStorage.setItem('counter', counter); // Menyimpan nilai counter ke penyimpanan lokal
        document.getElementById('counter').innerText = counter; // Menetapkan teks counter

        let popcat = document.getElementById('popcat');
        popcat.src = 'smel.png';
        popcat.classList.add('animate-pop');

        setTimeout(() => {
            popcat.src = 'zelosed.png';
            popcat.classList.remove('animate-pop');
        }, 200);

        clickSound.currentTime = 0; // Set ulang waktu audio ke awal
        clickSound.play(); // Memainkan suara klik
    }
});
