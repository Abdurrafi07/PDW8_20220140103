document.addEventListener("DOMContentLoaded", function() {

  // Get the registration form element
  var registrationForm = document.getElementById("registrationForm");

  registrationForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form element values
    var nama = document.getElementById('nama').value;
    var alamat = document.getElementById('alamat').value;
    var tgl_lahir = document.getElementById('tgl_lahir').value;
    var jenis_kelamin = document.querySelector('input[name="jenis_kelamin"]:checked').value;
    var asal_sekolah = document.getElementById('asal_sekolah').value;

    // Get current date and time (optimized)
    var sekarang = new Date();
    var tanggal = sekarang.toLocaleDateString('id-ID');
    var waktu = sekarang.toLocaleTimeString('id-ID');

    // Create notification element
    var notification = document.createElement("div");
    notification.className = "notification";

    // Basic information in notification
    notification.innerHTML = "Pendaftaran berhasil!<br>Nama: " + nama + "<br>Alamat: " + alamat + "<br>Tanggal Lahir: " + tgl_lahir + "<br>Jenis Kelamin: " + jenis_kelamin + "<br>Asal Sekolah: " + asal_sekolah + "<br>";

    // Mapping for checkbox options (more flexible)
    var checkboxOptions = {
      "Tanggal Pendaftaran": tanggal,
      "Waktu Pendaftaran": waktu
    };

    // Process selected checkbox options
    var selectedOptions = [];
    var checkboxes = document.querySelectorAll('input[name="minat[]"]:checked');
    for (var i = 0; i < checkboxes.length; i++) {
      var checkbox = checkboxes[i];
      if (checkboxOptions.hasOwnProperty(checkbox.value)) {
        // Handle "Tanggal Pendaftaran" and "Waktu Pendaftaran"
        notification.innerHTML += "<br>" + checkbox.value + ": " + checkboxOptions[checkbox.value];
      } else {
        // Add other selected options
        selectedOptions.push(checkbox.value);
      }
    }

    // Add remaining selected options (excluding date/time)
    if (selectedOptions.length > 0) {
      notification.innerHTML += "<br>Sumber Informasi: " + selectedOptions.join(', ');
    }

    // Add notification to the body
    document.body.appendChild(notification);

    // Show notification
    notification.style.display = "block";

    // Hide notification on click outside
    document.addEventListener("click", function(event) {
      if (event.target !== notification) {
        notification.style.display = "none";
      }
    });

    // Reset form after successful submission
    this.reset();
  });
});


  const registrationForm = document.getElementById('registrationForm');
  const resetButton = document.getElementById('resetButton');

  resetButton.addEventListener('click', function() {
    registrationForm.reset();
  });
  