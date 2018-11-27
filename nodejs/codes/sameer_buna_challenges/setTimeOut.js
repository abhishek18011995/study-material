const hello = (_i) => {
    console.log('hello ' + _i );
}

for (let i = 1; i <= 2; i++) {
    setTimeout(hello, i * 4000, i);
}