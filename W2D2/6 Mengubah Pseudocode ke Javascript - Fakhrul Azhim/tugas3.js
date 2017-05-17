/*
MASUKKAN sebuah tahun pada `tahun`
IF `tahun` habis dibagi 4 THEN:
    IF `tahun` tidak habis dibagi 100 THEN:
        TULISKAN "`tahun` adalah tahun kabisat"
    ELSE:
        IF `tahun` habis dibagi 400 THEN:
            TULISKAN "`tahun` adalah tahun kabisat"
        ELSE:
            TULISKAN "`tahun` adalah bukan tahun kabisat"
        ENDIF
    ENDIF
ELSE:
    TULISKAN "`tahun` adalah bukan tahun kabisat"
ENDIF */

    
alert('Ini adalah Program Pemindai Tahun Kabisat');
var tahun = prompt('Masukkan Tahun:');
if(tahun % 4 === 0){
    if(tahun % 100 != 0) {
        alert(tahun +' adalah tahun kabisat');
    } else if (tahun % 400 === 0) {
        alert(tahun +' adalah tahun kabisat');
    } else {
        alert(tahun + ' bukan tahun kabisat');
    }
} else {
    alert(tahun + ' Bukan tahun kabisat')
}

