let kilo = prompt("Masukkan Berapa Kg Daging Sapi")
const params = new URLSearchParams(window.location.search);
const nama = params.get("nama");
if (nama == "dendeng") {
    document.getElementById("bintang").innerHTML = '⭐⭐⭐⭐'
    document.getElementById("gambar1").innerHTML = '<img src="img/rendang.png" class="img-fluid rounded-start w-100" style="height: 100%; object-fit: cover;" alt="Rendang">'
    document.getElementById("menu1").innerHTML = 'Rendang'
    document.getElementById("submenu1").innerHTML = 'Daging sapi yang dimasak lama dengan santan dan rempah hingga kering dan berwarna cokelat gelap, menghasilkan rasa gurih pedas yang kaya.'
    document.getElementById("tombol1").innerHTML = '<a href="sapi.html?nama=rendang" class="btn btn-sm btn-primary">Lihat Resep</a>'

    document.getElementById("gambar2").innerHTML = '<img src="img/tambusu.png" class="img-fluid rounded-start w-100" style="height: 100%; object-fit: cover;" alt="Gulai Tambusu">'
    document.getElementById("menu2").innerHTML = 'Gulai Tambusu'
    document.getElementById("submenu2").innerHTML = 'Usus sapi yang diisi adonan telur dan tahu berbumbu, lalu dikukus dan disajikan dengan kuah gulai kental khas Minang.'
    document.getElementById("tombol2").innerHTML = '<a href="sapi.html?nama=tambusu" class="btn btn-sm btn-primary">Lihat Resep</a>'


    document.getElementById("gambar").innerHTML = '<img src="img/dendeng.png" alt="Dendeng" class="hero-image" width="300">'
    document.getElementById("judul").innerHTML = "Dendeng Batokok"
    document.getElementById("resep").innerHTML = "🍖 Resep Dendeng Batokok"
    document.getElementById("definisi").innerHTML = "Irisan tipis daging sapi yang digoreng kering, disajikan dengan sambal balado atau bumbu hitam pekat yang pedas dan gurih."

    document.getElementById("bahan").innerHTML = ""
    document.getElementById("langkah").innerHTML = ""
    for (let i = 1; i <= 17; i++) {
        document.getElementById("bahan").innerHTML += '<li class="list-group-item" id =' + i + '></li>'
    }
    for (let i = 100; i <= 104; i++) {
        document.getElementById("langkah").innerHTML += '<li class="list-group-item" id =' + i + '></li>'
    }
    document.getElementById("100").innerHTML = "Potong-potong daging, aku potong menjadi 10 slice. Cuci bersih. Haluskan bumbu halus, lalu tumis dengan minyak goreng. Tambahkan air, rebus daging. Masukan lengkuas geprek, sereh, dan daun salam.. rebus daging hingga empuk"
    document.getElementById("101").innerHTML = "Setelah daging empuk angkat daging lalu geprek menggunkan ulekan, agar bumbu meresap. Kemudian goreng daging di minyak panas hingga kecokelatan."
    document.getElementById("102").innerHTML = "Haluskan cabai merah sebagian menggunkan blender, sebagian lagi di tumbuk kasar dengan bawang merah, lalu masak sampai harum, setelah harum masukan daging aduk hingga rata."
    document.getElementById("103").innerHTML = "Setelah bumbu menyusut angkat dan hidangkan dendeng batokok sambal merah."
    document.getElementById("104").innerHTML = "Makanan siap disajikan."
    document.getElementById("1").innerHTML = kilo + " kg daging sapi khas dalam";
    document.getElementById("2").innerHTML = kilo * 16 + " siung bawang merah";
    document.getElementById("3").innerHTML = kilo * 8 + " siung bawang putih";
    document.getElementById("4").innerHTML = kilo * 1 + " ruas jahe";
    document.getElementById("5").innerHTML = kilo * 1 + " ruas kunyit";
    document.getElementById("6").innerHTML = kilo * 2 + " butir kemiri";
    document.getElementById("7").innerHTML = kilo * 2 + " sdt ketumbar";
    document.getElementById("8").innerHTML = kilo * 2 + " ruas lengkuas, geprek";
    document.getElementById("9").innerHTML = kilo * 8 + " lembar daun salam";
    document.getElementById("10").innerHTML = kilo * 2 + " batang sereh, geprek";
    document.getElementById("11").innerHTML = kilo * 40 + " buah cabai merah besar";
    document.getElementById("12").innerHTML = kilo * 20 + " buah cabai merah keriting";
    document.getElementById("13").innerHTML = kilo * 10 + " buah cabai rawit";
    document.getElementById("14").innerHTML = kilo * 16 + " siung bawang merah untuk sambal";
    document.getElementById("15").innerHTML = "Secukupnya minyak goreng";
    document.getElementById("16").innerHTML = "Secukupnya Royco atau penyedap";
    document.getElementById("17").innerHTML = "Secukupnya garam";

}
else if (nama == "rendang") {
    document.getElementById("bintang").innerHTML = '⭐⭐⭐⭐⭐'
    document.getElementById("gambar1").innerHTML = '<img src="img/dendeng.png" class="img-fluid rounded-start w-100" style="height: 100%; object-fit: cover;" alt="Dendeng">'
    document.getElementById("menu1").innerHTML = 'Dendeng Batokok'
    document.getElementById("submenu1").innerHTML = 'Irisan tipis daging sapi yang digoreng kering, disajikan dengan sambal balado atau bumbu hitam pekat yang pedas dan gurih.'
    document.getElementById("tombol1").innerHTML = '<a href="sapi.html?nama=dendeng" class="btn btn-sm btn-primary">Lihat Resep</a>'

    document.getElementById("gambar2").innerHTML = '<img src="img/tambusu.png" class="img-fluid rounded-start w-100" style="height: 100%; object-fit: cover;" alt="Gulai Tambusu">'
    document.getElementById("menu2").innerHTML = 'Gulai Tambusu'
    document.getElementById("submenu2").innerHTML = 'Usus sapi yang diisi adonan telur dan tahu berbumbu, lalu dikukus dan disajikan dengan kuah gulai kental khas Minang.'
    document.getElementById("tombol2").innerHTML = '<a href="sapi.html?nama=tambusu" class="btn btn-sm btn-primary">Lihat Resep</a>'

    document.getElementById("gambar").innerHTML = '<img src="img/rendang.png" alt="Rendang" class="hero-image" width="300">'
    document.getElementById("judul").innerHTML = "Rendang"
    document.getElementById("resep").innerHTML = "🍖 Resep Rendang"
    document.getElementById("definisi").innerHTML = "Daging sapi yang dimasak lama dengan santan dan rempah hingga kering dan berwarna cokelat gelap, menghasilkan rasa gurih pedas yang kaya."

    document.getElementById("bahan").innerHTML = ""
    document.getElementById("langkah").innerHTML = ""
    for (let i = 1; i <= 21; i++) {
        document.getElementById("bahan").innerHTML += '<li class="list-group-item" id =' + i + '></li>'
    }
    for (let i = 100; i <= 106; i++) {
        document.getElementById("langkah").innerHTML += '<li class="list-group-item" id =' + i + '></li>'
    }
    document.getElementById("100").innerHTML = "Tumis bumbu halus bersama daun jeruk, daun salam, daun kunyit, kayu manis, kapu laga, kembang lawang, cengkeh dan serai hingga harum dan matang."
    document.getElementById("101").innerHTML = "Masukkan potongan daging, aduk rata hingga daging berubah warna."
    document.getElementById("102").innerHTML = "Tuang santan, masak dengan api sedang, aduk perlahan agar santan tidak pecah."
    document.getElementById("103").innerHTML = "Masak terus dengan api kecil selama 2-3 jam hingga kuah mengering dan bumbu meresap sempurna ke dalam daging."
    document.getElementById("104").innerHTML = "Aduk sesekali agar tidak gosong. Jika ingin lebih kering (rendang kering khas Minang), masak lebih lama hingga bumbu benar-benar menghitam dan berminyak."
    document.getElementById("105").innerHTML = "Angkat dan sajikan dengan nasi hangat."
    document.getElementById("106").innerHTML = "Rendang siap disantap"
    document.getElementById("1").innerHTML = kilo + " kg daging sapi bagian paha atau sandung lamur, potong besar";
    document.getElementById("2").innerHTML = kilo * 2 + " liter santan dari " + (kilo * 2) + " butir kelapa tua";
    document.getElementById("3").innerHTML = kilo * 4 + " lembar daun jeruk";
    document.getElementById("4").innerHTML = kilo * 2 + " batang serai, geprek";
    document.getElementById("5").innerHTML = kilo * 2 + " lembar daun kunyit, simpulkan";
    document.getElementById("6").innerHTML = kilo * 2 + " lembar daun salam";
    document.getElementById("7").innerHTML = kilo + " potongan kecil kayu manis";
    document.getElementById("8").innerHTML = kilo + " buah kapulaga";
    document.getElementById("9").innerHTML = kilo * 2 + " buah cengkeh";
    document.getElementById("10").innerHTML = kilo + " buah kembang lawang";
    document.getElementById("11").innerHTML = "Secukupnya garam";
    document.getElementById("12").innerHTML = kilo * 10 + " siung bawang merah";
    document.getElementById("13").innerHTML = kilo * 7 + " siung bawang putih";
    document.getElementById("14").innerHTML = kilo * 100 + " gram cabai merah keriting";
    document.getElementById("15").innerHTML = kilo * 30 + " gram cabai rawit";
    document.getElementById("16").innerHTML = kilo * 2 + " potong lengkuas ukuran 4 cm";
    document.getElementById("17").innerHTML = kilo + " potong jahe ukuran 3 cm";
    document.getElementById("18").innerHTML = kilo + " sdt ketumbar";
    document.getElementById("19").innerHTML = kilo * 2 + " butir kemiri sangrai";
    document.getElementById("20").innerHTML = kilo * 0.5 + " sdt jinten";
    document.getElementById("21").innerHTML = kilo + " buah pala";
}
else if (nama == "tambusu") {
    document.getElementById("bintang").innerHTML = '⭐⭐⭐⭐'
    document.getElementById("gambar1").innerHTML = '<img src="img/dendeng.png" class="img-fluid rounded-start w-100" style="height: 100%; object-fit: cover;" alt="Dendeng Batokok">'
    document.getElementById("menu1").innerHTML = 'Dendeng Batokok'
    document.getElementById("submenu1").innerHTML = 'Dendeng Batokok'
    document.getElementById("tombol1").innerHTML = '<a href="sapi.html?nama=dendeng" class="btn btn-sm btn-primary">Lihat Resep</a>'

    document.getElementById("gambar2").innerHTML = '<img src="img/rendang.png" class="img-fluid rounded-start w-100" style="height: 100%; object-fit: cover;" alt="Rendang">'
    document.getElementById("menu2").innerHTML = 'Rendang'
    document.getElementById("submenu2").innerHTML = 'Daging sapi yang dimasak lama dengan santan dan rempah hingga kering dan berwarna cokelat gelap, menghasilkan rasa gurih pedas yang kaya.'
    document.getElementById("tombol2").innerHTML = '<a href="sapi.html?nama=rendang" class="btn btn-sm btn-primary">Lihat Resep</a>'

    document.getElementById("gambar").innerHTML = '<img src="img/tambusu.png" alt="Tambusu" class="hero-image" width="300">'
    document.getElementById("judul").innerHTML = "Gulai Tambusu"
    document.getElementById("resep").innerHTML = "🍖 Resep Gulai Tambusu"
    document.getElementById("definisi").innerHTML = "Usus sapi yang diisi adonan telur dan tahu berbumbu, lalu dikukus dan disajikan dengan kuah gulai kental khas Minang.  "

    document.getElementById("bahan").innerHTML = ""
    document.getElementById("langkah").innerHTML = ""
    for (let i = 1; i <= 21; i++) {
        document.getElementById("bahan").innerHTML += '<li class="list-group-item" id =' + i + '></li>'
    }
    for (let i = 100; i <= 105; i++) {
        document.getElementById("langkah").innerHTML += '<li class="list-group-item" id =' + i + '></li>'
    }
    document.getElementById("100").innerHTML = "Haluskan bumbu, tambahkan tahu kemudian haluskna kembali"
    document.getElementById("101").innerHTML = "Kocok lepas telur utuh, tambahkan tahu yang telah dicampur debgab bumbu aduk rata"
    document.getElementById("102").innerHTML = "Ikat bagian ujung usus yang sudah dibersihkan sebelumnya, masukan adonan telur dan tahu jangan terlalu penuh agar tidak pecah, ikat kembali ujungnya, lakukan hingga semua usus terisi, rebus hingga padat"
    document.getElementById("103").innerHTML = "Campur semua bumbu dan haluskan"
    document.getElementById("104").innerHTML = "Tumis bumbu hingga harum, tambahkan santan dan usus, masak hingga usus empuk"
    document.getElementById("105").innerHTML = "Makanan siap disajikan"
    document.getElementById("1").innerHTML = (kilo * 1) + " kotak tahu";
    document.getElementById("2").innerHTML = (kilo * 0.5) + " kg usus sapi";
    document.getElementById("3").innerHTML = (kilo * 3) + " butir telur utuh";
    document.getElementById("4").innerHTML = (kilo * 5) + " siung bawang merah";
    document.getElementById("5").innerHTML = (kilo * 3) + " siung bawang putih";
    document.getElementById("6").innerHTML = (kilo * 1) + " ruas kunyit";
    document.getElementById("7").innerHTML = (kilo * 1) + " ruas jahe";
    document.getElementById("8").innerHTML = (kilo * 2) + " buah cabai merah";
    document.getElementById("9").innerHTML = (kilo * 7) + " siung bawang merah";
    document.getElementById("10").innerHTML = (kilo * 3) + " siung bawang putih";
    document.getElementById("11").innerHTML = (kilo * 2) + " ruas jahe";
    document.getElementById("12").innerHTML = (kilo * 2) + " ruas kunyit";
    document.getElementById("13").innerHTML = (kilo * 20) + " buah cabai rawit";
    document.getElementById("14").innerHTML = (kilo * 1) + " batang sereh, geprek";
    document.getElementById("15").innerHTML = (kilo * 1) + " ruas lengkuas, geprek";
    document.getElementById("16").innerHTML = (kilo * 0.5) + " sdt jinten bubuk";
    document.getElementById("17").innerHTML = (kilo * 0.5) + " sdt ketumbar bubuk";
    document.getElementById("18").innerHTML = (kilo * 1) + " liter santan dari " + (kilo * 1) + " butir kelapa";
    document.getElementById("19").innerHTML = (kilo * 1) + " lembar daun kunyit";
    document.getElementById("20").innerHTML = (kilo * 2) + " lembar daun jeruk";
    document.getElementById("21").innerHTML = (kilo * 3) + " lembar daun salam";
}
