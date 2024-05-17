document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Menghentikan perilaku default formulir

    // Mendapatkan nilai dari elemen formulir
    var nama = document.getElementById('nama').value;
    var alamat = document.getElementById('alamat').value;
    var tgl_lahir = document.getElementById('tgl_lahir').value;
    var jenis_kelamin = document.querySelector('input[name="jenis_kelamin"]:checked').value;
    var asal_sekolah = document.getElementById('asal_sekolah').value;

    // Mendapatkan Tanggal dan Waktu
    var sekarang = new Date();

    // Memformat Tanggal dan Waktu
    var tanggal = sekarang.toLocaleDateString('id-ID');
    var waktu = sekarang.toLocaleTimeString('id-ID');

    // Create a notification element
    var notification = document.createElement("div");
    notification.className = "notification";

    // Populate notification with basic information
    notification.innerHTML = "Pendaftaran berhasil!<br>Nama: " + nama + "<br>Alamat: " + alamat + "<br>Tanggal Lahir: " + tgl_lahir + "<br>Jenis Kelamin: " + jenis_kelamin + "<br>Asal Sekolah: " + asal_sekolah + "<br>";

    // Separate handling for checkbox options
    var selectedOptions = [];
    var checkboxes = document.querySelectorAll('input[name="minat[]"]:checked');
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].value === "Tanggal Pendaftaran") {
        notification.innerHTML += "<br>Tanggal Pendaftaran: " + tanggal;
      } else if (checkboxes[i].value === "Waktu Pendaftaran") {
        notification.innerHTML += "<br>Waktu Pendaftaran: " + waktu;
      } else {
        // Add other selected options (if any)
        selectedOptions.push(checkboxes[i].value);
      }
    }

    // Add remaining selected checkbox options (excluding date/time)
    if (selectedOptions.length > 0) {
      notification.innerHTML += "<br>Sumber Informasi: " + selectedOptions.join(', ');
    }

    // Add the notification element to the body
    document.body.appendChild(notification);

    // Show the notification
    notification.style.display = "block";

    // Hide the notification when the user clicks anywhere on the screen
    document.addEventListener("click", function(event) {
      if (event.target !== notification) {
        notification.style.display = "none";
      }
    });
          // Reset formulir setelah pengiriman berhasil
          this.reset();
  });
});

  const registrationForm = document.getElementById('registrationForm');
  const resetButton = document.getElementById('resetButton');

  resetButton.addEventListener('click', function() {
    registrationForm.reset();
  });
  