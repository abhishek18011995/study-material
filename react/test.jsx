const randomSumIn = (arr, max) => {
    const sets = [[]];
    let jLen;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0, jLen = sets.length; j < jLen; j++) {
            // console.log(arr[i].concat(arr[j]));
            // console.log('i' + arr[i]);
            // console.log('j' + arr[j]);
            const candidateSet = sets[j].concat(arr[i]);
            sets.push(candidateSet);
            console.log(candidateSet);
        }
    }
}

console.log(randomSumIn([1, 5, 7, 2], 10));