function countSwaps(a) {
    let isSorted = false;
    let counter = 0;
    while (!isSorted) {
        isSorted = true;
        for (let i = 0; i < a.length - 1; i++) {
            if (a[i] > a[i + 1]) {
                [a[i], a[i + 1]] = [a[i + 1], a[i]];
                counter++;
                isSorted = false;
            }
        }
    }

    console.log(`Array is sorted in ${counter} swaps.`);
    console.log(`First Element: ${a[0]}`);
    console.log(`Last Element: ${a[a.length -1 ]}`);
}

countSwaps([5, 2, 1]);