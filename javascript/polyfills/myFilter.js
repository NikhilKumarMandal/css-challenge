// A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.

const arr = [1, 2, 3, 4, 5, 6];


// creating my own filter

if (!Array.prototype.myFilter) {
    Array.prototype.myFilter = function (cb) {
        let result = [];
        for (let i = 0; i < this.length; i++) {
            if (cb(this[i])) {
                result.push(this[i]);
            };
        };
        return result;
    }
}


const arr1 = arr.myFilter(e => e % 2 == 0);
console.log(arr1);
