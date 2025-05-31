let kilo = prompt("Masukkan Berapa Kg Daging Ikan")
const params = new URLSearchParams(window.location.search);
const nama = params.get("nama");
if (nama=="ikanbakar"){
  document.getElementById("gambar1").innerHTML='<img src="img/gulaikepalakakap.png" class="img-fluid rounded-start w-100" style="height: 100%; object-fit: cover;" alt="Gulai Kepala Kakap">'
  document.getElementById("menu1").innerHTML='Gulai Kepala Kakap'
  document.getElementById("submenu1").innerHTML='Kepala ikan kakap dalam kuah santan pedas dan harum rempah.'
  document.getElementById("tombol1").innerHTML='<a href="ikan.html?nama=gulaikepalakakap" class="btn btn-sm btn-primary">Lihat Resep</a>'
  document.getElementById("gambar2").innerHTML='<img src="img/ikanasampadeh.png" class="img-fluid rounded-start w-100" style="height: 100%; object-fit: cover;" alt="Ikan Asam Padeh">'
  document.getElementById("menu2").innerHTML='Ikan Asam Padeh'
  document.getElementById("submenu2").innerHTML='Ikan berkuah pedas asam tanpa santan, segar dan menggugah selera.'
  document.getElementById("tombol2").innerHTML='<a href="ikan.html?nama=ikanasampadeh" class="btn btn-sm btn-primary">Lihat Resep</a>'
  document.getElementById("gambar").innerHTML='<img src="img/ikanbakar.png" alt="Ikan Bakar Padang" class="hero-image" width="300">'
  document.getElementById("judul").innerHTML="Ikan Bakar Padang"
  document.getElementById("resep").innerHTML="🐟 Resep Ikan Bakar Padang"
  document.getElementById("definisi").innerHTML="Ikan berbumbu kuning pedas yang dibakar hingga harum."
  document.getElementById("bahan").innerHTML = ""
  document.getElementById("langkah").innerHTML = ""
  for (let i = 1 ; i <= 15; i++){
    document.getElementById("bahan").innerHTML += '<li class="list-group-item" id =' + i + '></li>'
  }
  for (let i = 100 ; i <= 107; i++){
    document.getElementById("langkah").innerHTML += '<li class="list-group-item" id =' + i + '></li>'
  }
  document.getElementById("100").innerHTML = "Siapkan bumbu halus, lalu blender atau uleg hingga halus.";
  document.getElementById("101").innerHTML = "Bersihkan ikan hingga tidak ada kotoran yang tersisa.";
  document.getElementById("102").innerHTML = "Panaskan minyak, lalu tumis bumbu halus bersama serai, daun salam, dan daun jeruk hingga harum.";
  document.getElementById("103").innerHTML = "Tuang air, masukkan ikan ke dalam tumisan.";
  document.getElementById("104").innerHTML = "Tambahkan santan instan, garam, dan penyedap rasa secukupnya.";
  document.getElementById("105").innerHTML = "Masak hingga kuah menyusut dan mengental.";
  document.getElementById("106").innerHTML = "Panggang ikan bolak-balik hingga kecokelatan dan matang merata.";
  document.getElementById("107").innerHTML = "Ikan siap disajikan selagi hangat.";
  document.getElementById("1").innerHTML = kilo * 1 + " kg ikan kembung";
  document.getElementById("2").innerHTML = kilo * 4 + " batang serai, geprek";
  document.getElementById("3").innerHTML = kilo * 6 + " lembar daun salam";
  document.getElementById("4").innerHTML = kilo * 6 + " lembar daun jeruk";
  document.getElementById("5").innerHTML = kilo * 12 + " buah bawang merah";
  document.getElementById("6").innerHTML = kilo * 10 + " siung bawang putih";
  document.getElementById("7").innerHTML = kilo * 4 + " ruas kunyit";
  document.getElementById("8").innerHTML = kilo * 4 + " ruas jahe";
  document.getElementById("9").innerHTML = kilo * 4 + " butir kemiri";
  document.getElementById("10").innerHTML = kilo * 16 + " buah cabai merah keriting";
  document.getElementById("11").innerHTML = kilo * 2 + " ruas lengkuas";
  document.getElementById("12").innerHTML = kilo * 130 + " ml santan instan";
  document.getElementById("13").innerHTML = kilo * 1200 + " ml air";
  document.getElementById("14").innerHTML = "Garam dan penyedap rasa secukupnya (disesuaikan)";
  document.getElementById("15").innerHTML = "Minyak untuk menumis secukupnya";
}
else if (nama=="gulaikepalakakap"){
  document.getElementById("gambar1").innerHTML='<img src="img/ikanbakar.png" class="img-fluid rounded-start w-100" style="height: 100%; object-fit: cover;" alt="Ikan Bakar Padang">'
  document.getElementById("menu1").innerHTML='Ikan Bakar Padang'
  document.getElementById("submenu1").innerHTML='Ikan berbumbu kuning pedas yang dibakar hingga harum.'
  document.getElementById("tombol1").innerHTML='<a href="ikan.html?nama=ikanbakar" class="btn btn-sm btn-primary">Lihat Resep</a>'
  document.getElementById("gambar2").innerHTML='<img src="img/ikanasampadeh.png" class="img-fluid rounded-start w-100" style="height: 100%; object-fit: cover;" alt="Ikan Asam Padeh">'
  document.getElementById("menu2").innerHTML='Ikan Asam Padeh'
  document.getElementById("submenu2").innerHTML='Ikan berkuah pedas asam tanpa santan, segar dan menggugah selera.'
  document.getElementById("tombol2").innerHTML='<a href="ikan.html?nama=ikanasampadeh" class="btn btn-sm btn-primary">Lihat Resep</a>'
  document.getElementById("gambar").innerHTML='<img src="img/gulaikepalakakap.png" alt="Gulai Kepala Kakap" class="hero-image" width="300">'
  document.getElementById("judul").innerHTML="Gulai Kepala Kakap"
  document.getElementById("resep").innerHTML="🐟 Resep Gulai Kepala Kakap"
  document.getElementById("definisi").innerHTML="Kepala ikan kakap dalam kuah santan pedas dan harum rempah."
  document.getElementById("bahan").innerHTML = ""
  document.getElementById("langkah").innerHTML = ""
  for (let i = 1 ; i <= 15; i++){
    document.getElementById("bahan").innerHTML += '<li class="list-group-item" id =' + i + '></li>'
  }
  for (let i = 100 ; i <= 104; i++){
    document.getElementById("langkah").innerHTML += '<li class="list-group-item" id =' + i + '></li>'
  }
  document.getElementById("100").innerHTML = "Siapkan bahan. Cuci bersih kepala ikan, beri perasan lemon dan sedikit garam. Sisihkan. Haluskan bahan bumbu halus"
  document.getElementById("101").innerHTML = "Tumis bumbu halus beserta sereh, daun kunyit dan daun jeruk sampai harum. Tuang santan, masak sekitar 10 menit sambil diaduk supaya tidak pecah"
  document.getElementById("102").innerHTML = "Masukkan kepala ikan kakap, asam kandis dan potongan tomat hijau / belimbing sayur. Masak sampai ikan matang, ± 15-20 menit dengan api sedang sambil sesekali diaduk."
  document.getElementById("103").innerHTML = "Beri garam dan gula, aduk rata. Koreksi rasa sampai sesuai selera."
  document.getElementById("104").innerHTML = "Angkat dan siap disajikan."
  document.getElementById("1").innerHTML = kilo * 1 + " kg ikan kakap";
  document.getElementById("2").innerHTML = kilo * 16 + " siung bawang merah";
  document.getElementById("3").innerHTML = kilo * 6 + " siung bawang putih";
  document.getElementById("4").innerHTML = kilo * 30 + " buah cabai merah (sesuai selera)";
  document.getElementById("5").innerHTML = kilo * 20 + " buah cabai rawit (sesuai selera)";
  document.getElementById("6").innerHTML = kilo * 6 + " butir kemiri";
  document.getElementById("7").innerHTML = kilo * 2 + " ruas kunyit";
  document.getElementById("8").innerHTML = kilo * 2 + " iris jahe";
  document.getElementById("9").innerHTML = kilo * 4 + " batang serai, memarkan";
  document.getElementById("10").innerHTML = kilo * 10 + " lembar daun jeruk, buang tulang tengahnya";
  document.getElementById("11").innerHTML = kilo * 2 + " lembar daun kunyit, simpulkan atau iris halus";
  document.getElementById("12").innerHTML = kilo * 2 + " buah asam kandis";
  document.getElementById("13").innerHTML = kilo * 10 + " buah belimbing sayur atau tomat hijau, potong-potong";
  document.getElementById("14").innerHTML = kilo * 2000 + " ml santan (kara + air)";
  document.getElementById("15").innerHTML = "Garam dan gula secukupnya (disesuaikan dengan selera)";
}
else if (nama=="ikanasampadeh"){
  document.getElementById("gambar1").innerHTML='<img src="img/ikanbakar.png" class="img-fluid rounded-start w-100" style="height: 100%; object-fit: cover;" alt="Ikan Bakar Padang">'
  document.getElementById("menu1").innerHTML='Ikan Bakar Padang'
  document.getElementById("submenu1").innerHTML='Ikan berbumbu kuning pedas yang dibakar hingga harum.'
  document.getElementById("tombol1").innerHTML='<a href="ikan.html?nama=ikanbakar" class="btn btn-sm btn-primary">Lihat Resep</a>'
  document.getElementById("gambar2").innerHTML='<img src="img/gulaikepalakakap.png" class="img-fluid rounded-start w-100" style="height: 100%; object-fit: cover;" alt="Gulai Kepala Kakap">'
  document.getElementById("menu2").innerHTML='Gulai Kepala Kakap'
  document.getElementById("submenu2").innerHTML='Kepala ikan kakap dalam kuah santan pedas dan harum rempah.'
  document.getElementById("tombol2").innerHTML='<a href="ikan.html?nama=gulaikepalakakap" class="btn btn-sm btn-primary">Lihat Resep</a>'
  document.getElementById("gambar").innerHTML='<img src="img/ikanasampadeh.png" alt="Ikan Asam Padeh" class="hero-image" width="300">'
  document.getElementById("judul").innerHTML="Ikan Asam Padeh"
  document.getElementById("resep").innerHTML="🐟 Resep Ikan Asam Padeh"
  document.getElementById("definisi").innerHTML="Ikan berkuah pedas asam tanpa santan, segar dan menggugah selera."
  
  document.getElementById("bahan").innerHTML = ""
  document.getElementById("langkah").innerHTML = ""
 
  for (let i = 1 ; i <= 15; i++){
    document.getElementById("bahan").innerHTML += '<li class="list-group-item" id =' + i + '></li>'
  }
  for (let i = 100 ; i <= 105; i++){
    document.getElementById("langkah").innerHTML += '<li class="list-group-item" id =' + i + '></li>'
  }

  document.getElementById("100").innerHTML = "Masukkan bumbu halus ke dalam kuali.";
  document.getElementById("101").innerHTML = "Masukkan air dan semua daun-daunan, lalu masak hingga mendidih.";
  document.getElementById("102").innerHTML = "Masukkan ikan Padang yang sudah dicuci, garam, kaldu bubuk, dan tomat yang sudah diblender.";
  document.getElementById("103").innerHTML = "Masak hingga kuah menyusut dan mengental.";
  document.getElementById("104").innerHTML = "Cicipi, koreksi rasa sesuai selera.";
  document.getElementById("105").innerHTML = "Makanan siap disajikan.";
  document.getElementById("1").innerHTML = kilo * 1 + " kg ikan padang";
  document.getElementById("2").innerHTML = kilo * 10 + " buah tomat";
  document.getElementById("3").innerHTML =  kilo * 5 + " sdt garam";
  document.getElementById("4").innerHTML =  kilo * 7.5 + " sdt kaldu bubuk";
  document.getElementById("5").innerHTML = kilo * 3000 + " ml air";
  document.getElementById("6").innerHTML = kilo * 5 + " lembar daun salam";
  document.getElementById("7").innerHTML = kilo * 5 + " lembar daun kunyit";
  document.getElementById("8").innerHTML = kilo * 15 + " lembar daun jeruk";
  document.getElementById("9").innerHTML = kilo * 15 + " lembar daun ruku-ruku";
  document.getElementById("10").innerHTML = kilo * 500 + " gram cabai merah";
  document.getElementById("11").innerHTML = kilo * 5 + " cm kunyit";
  document.getElementById("12").innerHTML = kilo * 5 + " cm jahe";
  document.getElementById("13").innerHTML = kilo * 10 + " siung bawang putih";
  document.getElementById("14").innerHTML = kilo * 35 + " butir bawang merah";
  document.getElementById("15").innerHTML =  kilo * 35 + " butir ketumbar";
  
}