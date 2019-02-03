function loadCount() {
    let sum = 0;
    for (let i = 0; i < 1e10; i++) {
        sum += 1;
    }
    return sum;
}

process.on('message' , (data) => {
    console.log(data);
    const sum = loadCount();
    process.send(sum);
})