let counter = 0;

const hello = () => {
    counter++;
    if (counter > 5) {
        clear();
    } else {
        console.log('hello ');
    }
}

const clear = () => {
    clearInterval(setHello);
    console.log('done');
}


const setHello = setInterval(hello, 5000);

// setImmediate(clear, 25* 1000);
