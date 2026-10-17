var barang = ['Pensil', 'Buku Tulis', 'Penggaris'];

function ShowData() {
    var listBarang = document.getElementById('list-barang');
    listBarang.innerHTML = '';

    for (var i = 0; i < barang.length; i++) {
        // Menambahkan class="btn-delete" agar tombol hapus berwarna merah rapi
        var linkHapus = '<a href="#" class="btn-delete" onclick="DelData(' + i + ')">Hapus</a>';
        listBarang.innerHTML += '<li>' + barang[i] + ' ' + linkHapus + '</li>';
    }
}

function AddData() {
    var input = document.getElementById('nama');

    // Validasi tambahan agar tidak bisa input teks kosong
    if (input.value.trim() === "") {
        alert("Nama barang tidak boleh kosong!");
        return;
    }

    barang.push(input.value);
    input.value = ''; // Mengosongkan kolom input setelah klik simpan
    ShowData();
}

function DelData(id) {
    barang.splice(id, 1);
    ShowData();
}

ShowData();