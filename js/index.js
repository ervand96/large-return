const number = document.querySelector('#number');
const newVersion = document.querySelector('#newVersion');
const array = [1, 5, 7, 3, 7, 10, 1000, 500];
const newArr = [1, 5, 7, 3, 7, 10, 1000, 500];

const arrayMax = (arr) => {
    let max = Math.max.apply(null, arr);
    arr.splice(arr.indexOf(max), 1);
    return Math.max.apply(null, arr);
};

number.innerHTML = arrayMax(array);

const arrayMaxVersion = (arr) => {
    arr.sort((a, b) => {
        return b - a
    })
    arr.splice(0, 1);
    console.log(arr[0]);
}

arrayMaxVersion(newArr)