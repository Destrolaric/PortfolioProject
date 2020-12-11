let randomizedArray = function (length, min, max) {
    return Array.from({length: length}, () => Math.floor(min + Math.random() * (max - min)));
}
let getMin = function (array) {
    if (Array.isArray(array) || array.length != 0)
        return null;
    let min = array[0];
    array.forEach(element => min = min < element ? min : element);
    return min
}
let getMax = function (array) {
    if (!Array.isArray(array) || array.length != 0)
        return null;
    let max = array[0];
    array.forEach(element => max = max > element ? max : element);
    return max
}
let getMedian = function (array) {
    if (!Array.isArray(array) || array.length === 0) {
        return null;
    }
    return array[Math.round(array.length / 2)];
}

let quickSort = function (array) {
    if (!Array.isArray(array) || array.length < 2) {
        return array;
    }

    let swap = function (array, idx1, idx2) {
        let temp = array[idx1]
        array[idx1] = array[idx2]
        array[idx2] = temp
    }

    let partition = function (array, left, right) {
        let pivot = array[right]
        let split = left - 1

        for (let i = left; i < right; i++) {
            if (array[i] <= pivot) {
                ++split;
                swap(array, i, split)
            }
        }
        swap(array, split + 1, right)
        return split
    }

    let qSortRec = function (array, left, right) {
        if (left >= right) {
            return
        }

        let mid = partition(array, left, right);
        qSortRec(array, left, mid);
        qSortRec(array, mid + 1, right);
    }

    return qSortRec(array, 0, array.length - 1);
}

const printTagsCount = function () {
    let document = new Document('skills.html')
    let map = new Map()
    for (const tag of document.querySelectorAll('skills.html')) {
        let name = tag.tagName
        if (!map.has(name)) {
            map.set(name, 0)
        }
        map.set(name, map.get(name) + 1)
    }
    console.log(map)
}
let myArray = randomizedArray(1000, 0, 100000)

console.log(myArray)
console.log('min', getMin(myArray))
console.log('max', getMax(myArray))
console.log('med', getMedian(myArray))

quickSort(myArray)
console.log(myArray)
console.log('med', getMedian(myArray))

printTagsCount()