// Game Proxytia

var nama = prompt('Ketik Nama Anda :');
var tahunLahir = prompt('Masukkan Tahun Kelahiran Anda :');
var peran = prompt('Ketik Peran Anda\nContoh: Ksatria, Tabib, Penyihir\nPenulisan Peran harus sesuai contoh');
var y = 2017;
var umur = y - tahunLahir;

if (peran === 'Ksatria') {
    alert('Selamat Datang di Dunia Proxytia, ' + nama + ' \nHalo Ksatria ' + nama + ' kamu dapat menyerang dengan senjatamu!' );
} else if (peran === 'Tabib') {
    alert('Selamat Datang di Dunia Proxytia, ' + nama + ' \nHalo Tabib ' + nama + ' kamu akan membantu temanmu yang terluka.');
} else if (peran === 'Penyihir'){
    alert('Selamat Datang di Dunia Proxytia, ' + nama + ' \nHalo Penyihr ' + nama + ' ciptakan keajaiban yang membantu kemenanganmu!');
} else {
    alert('Nama tidak boleh kosong. \n Pilih peranmu untuk memulai game ini\n untuk mengulang Refresh Borwser Anda!');
}
