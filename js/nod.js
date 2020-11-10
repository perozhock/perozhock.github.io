function gcd(a,b) {
    a = Math.abs(a);
    b = Math.abs(b);
    if (b > a) {var temp = a; a = b; b = temp;}
    while (true) {
        if (b == 0) return a;
        a %= b;
        if (a == 0) return b;
        b %= a;
    }
}

for (a=1; a < 16; a++) {
    for (b=1; b <16; b++) {
        if (gcd(a,b)>1) {
        console.log(a,b);
    }
}
}