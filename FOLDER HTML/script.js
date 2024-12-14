document.getElementById("formLink").addEventListener("click", function(event) {
    event.preventDefault(); // Mencegah link melakukan aksi default
    const form = document.getElementById("contactForm");
    form.style.display = form.style.display === "none" ? "block" : "none"; // Toggle tampilan form
  });

document.getElementById('sendButton').addEventListener('click', function ()  {
  const button = this;
  const notification = document.getElementById('notification');

  // Tambahkan spinner dan ubah text tombol
  button.innerHTML =<span class ="spinner-border-spinnerborder-sm" role="status" aria-hidden="true"></span>
  MENGIRIM... button.disable=true;
  //Simulasi pengiriman data (2 detik)
  setTimeout(() => {
  //kembalikan tombol ke kondisi semula
button. innerHTML= 'kirim';
button.disable=false;
// Tampilkan notifikasi
  notification.classList.remove('d-none');
  //sembunyikan notifikasi setelah 3 detik
   setTimeout(()  => {
    notification.classList.add('d-none');
    },3000);
  },2000;
});