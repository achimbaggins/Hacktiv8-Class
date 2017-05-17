/*
SIMPAN karakter kosong pada `bintang`
FOR setiap pertambahan 1 pada `index1` dari 1 sampai 10:
    FOR setiap pertambahan 1 pada `index2` dari 0 sampai `index1`:
        TAMBAHKAN `bintang` dengan karakter "*"
    ENDFOR
    TULISKAN `bintang`
    SIMPAN karakter kosong pada `bintang`
ENDFOR
*/

var bintang = '';
for(var i = 0; i <=10; i++) {
    for(var j = 0; j <= i; j++) {
        bintang += '*';
    }
    bintang += '\n';
}
console.log(bintang);