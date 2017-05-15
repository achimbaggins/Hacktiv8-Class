for (var i = 1; i <= 100; i++) {
    if (i% 10 ===0) {
        console.log(i +' adalah angka kelipatan 10');
    } else if (i % 6 === 0) {
        console.log(i + ' adalah angka kelipatan 6');
    } else if (i % 3 === 0) {
        console.log(i + ' adalah angka kelipatan 3');
    } else if (i % 2 === 0) {
        console.log(i + ' adalah bilangan GENAP');
    } else {
        console.log(i + ' adalah bilangan GANJIL');
    } 
}