/*
SIMPAN karakter kosong pada `pagar`
FOR setiap pertambahan 1 pada `index1` dari 1 sampai 10:
    FOR setiap pertambahan 1 pada `index2` dari 0 sampai 10:
        TAMBAHKAN `pagar` dengan karakter "#"
    ENDFOR
    TULISKAN `pagar`
    SIMPAN karakter kosong pada `pagar`
ENDFOR
*/

var pagar = '';
for(var i = 0; i <=10; i++) {
    for(var j = 0; j <=i; j++) {
        pagar += '#';
    }
    pagar += '\n';
}
console.log(pagar);