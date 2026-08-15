// Membuat segitiga dengan looping statement sebanyak 10 baris
for (let i = 1; i <= 10; i++) {
    let segitiga = "";

    for (let j = 1; j <= i; j++) {
        segitiga += "*";
    }

    console.log(segitiga);
}

