let kilo = prompt("Masukkan Berapa Kg Daging Ayam")
const params = new URLSearchParams(window.location.search);
const nama = params.get("nama");
if (kilo === null || isNaN(kilo) || kilo.trim() === "") {
  alert("Masukkan jumlah kg ayam dengan benar!");
  kilo = 1;
}
kilo = parseFloat(kilo);
if (nama=="ayamgulai"){
  document.getElementById("gambar1").innerHTML='<img src="img/ayamgorenglaos.png" class="img-fluid rounded-start w-100" style="height: 100%; object-fit: cover;" alt="Ayam Goreng Laos">'
  document.getElementById("menu1").innerHTML='Ayam Goreng Laos'
  document.getElementById("submenu1").innerHTML='Ayam dengan taburan laos yang gurih dan wangi.'
  document.getElementById("tombol1").innerHTML='<a href="ayam.html?nama=ayamlaos" class="btn btn-sm btn-primary">Lihat Resep</a>'
  document.getElementById("gambar2").innerHTML='<img src="img/ayampop.png" class="img-fluid rounded-start w-100" style="height: 100%; object-fit: cover;" alt="Ayam Pop">'
  document.getElementById("menu2").innerHTML='Ayam Pop'
  document.getElementById("submenu2").innerHTML='Ayam rebus khas  dengan rasa gurih lembut.'
  document.getElementById("tombol2").innerHTML='<a href="ayam.html?nama=ayampop" class="btn btn-sm btn-primary">Lihat Resep</a>'
  document.getElementById("gambar").innerHTML='<img src="img/ayamgulai.png" alt="Ramen" class="hero-image" width="300">'
  document.getElementById("judul").innerHTML="Ayam Gulai"
  document.getElementById("resep").innerHTML="🍛 Resep Gulai Ayam"
  document.getElementById("definisi").innerHTML="Ayam Gulai adalah masakan khas Sumatera Barat yang kaya rempah dan dikenal karena kuahnya yang kental, berwarna kuning keemasan, dan rasanya yang gurih dengan sedikit sentuhan pedas."
  document.getElementById("bahan").innerHTML = ""
  document.getElementById("langkah").innerHTML = ""
  for (let i = 1 ; i <= 14; i++){
    document.getElementById("bahan").innerHTML += '<li class="list-group-item" id =' + i + '></li>'
  }
  for (let i = 100 ; i <= 104; i++){
    document.getElementById("langkah").innerHTML += '<li class="list-group-item" id =' + i + '></li>'
  }
  document.getElementById("100").innerHTML = "Blender semua bumbu halus, lalu tumis hingga wangi."
  document.getElementById("101").innerHTML = "Masukkan serai, daun salam, daun jeruk dan daun kunyit. Tumis hingga agak layu."
  document.getElementById("102").innerHTML = "Masukkan santan, air, cabe, pala bubuk, bumbu kambing dan bubuk kari, masak sambil terus diaduk hingga mendidih."
  document.getElementById("103").innerHTML = "Masukkan ayam, aduk sesekali hingga 1/2 empuk. Bubuhkan garam, lalu masukkan kentang, masak hingga empuk."
  document.getElementById("104").innerHTML = "Angkat dan siap disajikan."
  document.getElementById("1").innerHTML = kilo + " kg ayam";
  document.getElementById("2").innerHTML = 500 * kilo + " ml santan";
  document.getElementById("3").innerHTML = 250 * kilo + " ml air (disesuaikan)";
  document.getElementById("4").innerHTML = 2 * kilo + " sdm cabe giling halus";
  document.getElementById("5").innerHTML = kilo * 1 + " lembar daun kunyit";
  document.getElementById("6").innerHTML = kilo * 2 + " lembar daun salam";
  document.getElementById("7").innerHTML = kilo * 5 + " lembar daun jeruk";
  document.getElementById("8").innerHTML = kilo * 1 + " batang serai, geprek";
  document.getElementById("9").innerHTML = kilo * 1 + " sdt bumbu kambing (opsional)";
  document.getElementById("10").innerHTML = (kilo * 0.5) + " sdt bubuk kari (opsional)";
  document.getElementById("11").innerHTML = (kilo * 0.25) + " sdt pala bubuk";
  document.getElementById("12").innerHTML = kilo * 2 + " sdt garam (sesuai selera)";
  document.getElementById("13").innerHTML = (kilo * 0.5) + " sdt merica (opsional)";
  document.getElementById("14").innerHTML = kilo * 2 + " buah kentang, potong dadu";
}
else if (nama=="ayamlaos"){
  document.getElementById("gambar1").innerHTML='<img src="img/ayamgulai.png" class="img-fluid rounded-start w-100" style="height: 100%; object-fit: cover;" alt="Ayam Goreng Laos">'
  document.getElementById("menu1").innerHTML='Ayam Gulai'
  document.getElementById("submenu1").innerHTML='Ayam dengan kuah kuning kental gurih.'
  document.getElementById("tombol1").innerHTML='<a href="ayam.html?nama=ayamgulai" class="btn btn-sm btn-primary">Lihat Resep</a>'
  document.getElementById("gambar2").innerHTML='<img src="img/ayampop.png" class="img-fluid rounded-start w-100" style="height: 100%; object-fit: cover;" alt="Ayam Pop">'
  document.getElementById("menu2").innerHTML='Ayam Pop'
  document.getElementById("submenu2").innerHTML='Ayam rebus khas Padang dengan rasa gurih lembut.'
  document.getElementById("tombol2").innerHTML='<a href="ayam.html?nama=ayampop" class="btn btn-sm btn-primary">Lihat Resep</a>'
  document.getElementById("gambar").innerHTML='<img src="img/ayamgorenglaos.png" alt="Ayam Goreng Laos" class="hero-image" width="300">'
  document.getElementById("judul").innerHTML="Ayam Goreng Laos"
  document.getElementById("resep").innerHTML="🍛 Resep Ayam Goreng Laos"
  document.getElementById("definisi").innerHTML="Ayam Goreng Laos adalah hidangan ayam goreng khas Minangkabau, Sumatera Barat, yang terkenal dengan penggunaan bumbu lengkuas parut sebagai ciri khasnya."
  document.getElementById("bahan").innerHTML = ""
  document.getElementById("langkah").innerHTML = ""
  for (let i = 1 ; i <= 15; i++){
    document.getElementById("bahan").innerHTML += '<li class="list-group-item" id =' + i + '></li>'
  }
  for (let i = 100 ; i <= 104; i++){
    document.getElementById("langkah").innerHTML += '<li class="list-group-item" id =' + i + '></li>'
  }
  document.getElementById("100").innerHTML = "Bawang putih, kemiri, ketumbar, jahe, kunyit dihaluskan. Lengkuas dicacah sampai halus."
  document.getElementById("101").innerHTML = "Masukkan ayam, bumbu halus, bumbu aromatic, garam dan gula. Tambahkan air dan lengkuas."
  document.getElementById("102").innerHTML = "Masak sampai ayam empuk."
  document.getElementById("103").innerHTML = "Setelah ayam ungkep matang, ayam digoreng sampai kecoklatan. Bumbu lengkuas yang masih tersisa diambil dari air rebusan, lalu digoreng sampai kering jadi mirip srundeng."
  document.getElementById("104").innerHTML = "Angkat dan siap disajikan."
  document.getElementById("1").innerHTML = kilo + " kg ayam";
  document.getElementById("2").innerHTML = kilo * 200 + " gram lengkuas muda";
  document.getElementById("3").innerHTML = kilo * 1500 + " ml air";
  document.getElementById("4").innerHTML = kilo * 8 + " siung bawang putih";
  document.getElementById("5").innerHTML = kilo * 5 + " butir bawang merah";
  document.getElementById("6").innerHTML = kilo * 1 + " sdt ketumbar bubuk";
  document.getElementById("7").innerHTML = kilo * 4 + " butir kemiri";
  document.getElementById("8").innerHTML = kilo * 1 + " sdt lada bubuk";
  document.getElementById("9").innerHTML = kilo * 1 + " sdt kunyit bubuk";
  document.getElementById("10").innerHTML = kilo * 3 + " cm jahe";
  document.getElementById("11").innerHTML = kilo * 1 + " sdm garam";
  document.getElementById("12").innerHTML = kilo * 1 + " sdt gula";
  document.getElementById("13").innerHTML = kilo * 1 + " batang serai";
  document.getElementById("14").innerHTML = kilo * 3 + " lembar daun salam";
  document.getElementById("15").innerHTML = kilo * 3 + " lembar daun jeruk";
}
else if (nama=="ayampop"){
  document.getElementById("gambar1").innerHTML='<img src="img/ayamgulai.png" class="img-fluid rounded-start w-100" style="height: 100%; object-fit: cover;" alt="Ayam Goreng Laos">'
  document.getElementById("menu1").innerHTML='Ayam Gulai'
  document.getElementById("submenu1").innerHTML='Ayam dengan kuah kuning kental gurih.'
  document.getElementById("tombol1").innerHTML='<a href="ayam.html?nama=ayamgulai" class="btn btn-sm btn-primary">Lihat Resep</a>'
  document.getElementById("gambar2").innerHTML='<img src="img/ayamgorenglaos.png" class="img-fluid rounded-start w-100" style="height: 100%; object-fit: cover;" alt="Ayam Goreng Laos">'
  document.getElementById("menu2").innerHTML='Ayam Goreng Laos'
  document.getElementById("submenu2").innerHTML='Ayam dengan taburan laos yang gurih dan wangi.'
  document.getElementById("tombol2").innerHTML='<a href="ayam.html?nama=ayamlaos" class="btn btn-sm btn-primary">Lihat Resep</a>'
  document.getElementById("gambar").innerHTML='<img src="img/ayampop.png" alt="Ramen" class="hero-image" width="300">'
  document.getElementById("judul").innerHTML="Ayam Pop"
  document.getElementById("resep").innerHTML="🍛 Resep Ayam Pop"
  document.getElementById("definisi").innerHTML="Ayam pop adalah hidangan ayam goreng khas Padang yang memiliki ciri khas warna putih pucat dan tekstur empuk."
  
  document.getElementById("bahan").innerHTML = ""
  document.getElementById("langkah").innerHTML = ""
  for (let i = 1 ; i <= 13; i++){
    document.getElementById("bahan").innerHTML += '<li class="list-group-item" id =' + i + '></li>'
  }
  for (let i = 100 ; i <= 103; i++){
    document.getElementById("langkah").innerHTML += '<li class="list-group-item" id =' + i + '></li>'
  }
  document.getElementById("100").innerHTML = "Haluskan bumbu halus lalu tumis sebentar dengan minyak panas beserta daun salam, daun jeruk, lengkuas, jahe dan sereh hingga harum"
  document.getElementById("101").innerHTML = "Masukan ayam dan air kelapa, beserta bumbu yg sudah ditumis. Tambahkan air putih hingga ayam terendam. Aduk sesekali sampai mendidih"
  document.getElementById("102").innerHTML = "Apabila sudah mendidih dan ayam hampir matang, masukan santan dan aduk kembali hingga meresap ke ayam dengan sempurna"
  document.getElementById("103").innerHTML = "Ayam ditiriskan dan siap dihidangkan"
  document.getElementById("1").innerHTML = kilo + " kg ayam paha";
  document.getElementById("2").innerHTML = kilo * 1000 + " ml air kelapa";
  document.getElementById("3").innerHTML = kilo * 6 + " lembar daun salam";
  document.getElementById("4").innerHTML = kilo * 6 + " lembar daun jeruk";
  document.getElementById("5").innerHTML = kilo * 6 + " batang sereh";
  document.getElementById("6").innerHTML = kilo * 2 + " ruas jahe";
  document.getElementById("7").innerHTML = kilo * 2 + " ruas lengkuas";
  document.getElementById("8").innerHTML = kilo * 2 + " sdt kaldu jamur";
  document.getElementById("9").innerHTML = kilo * 1 + " sdt garam";
  document.getElementById("10").innerHTML = kilo * 130 + " ml santan";
  document.getElementById("11").innerHTML = kilo * 12 + " siung bawang putih (bumbu halus)";
  document.getElementById("12").innerHTML = kilo * 10 + " siung bawang merah (bumbu halus)";
  document.getElementById("13").innerHTML = kilo * 6 + " buah kemiri (bumbu halus)";
}