
module.exports = {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        let arrSum = 0;
        arr.forEach(element => {
            arrSum += element;
        });
        return arrSum;
    },

    remove : function(arr, item) {
        let resultArr = [];
        arr.forEach(element => {
            if (element !== item)
            {
                resultArr.push(element);
            }
        });
        return resultArr;
    },

    removeWithoutCopy : function(arr, item) {
        let i = 0;
        while (i < arr.length) {
            if (arr[i] === item) {
                arr.splice(i, 1);
            } else {
                i++;
            }
        }
        return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    prepend : function(arr, item) {
        arr.unshift(item);
        return arr;
    },

    curtail : function(arr) {
        arr.shift();
        return arr;
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
        let itemsCount = 0;
        arr.forEach(element => {
            if (element === item)
            {
                itemsCount++;
            }
        });
        return itemsCount;
    },

    duplicates : function(arr) {
        let sortedArr = arr.slice().sort();
        let resultArr = [];
        for (let i = 0; i < sortedArr.length - 1; i++) {
            if (sortedArr[i + 1] === sortedArr[i] && resultArr.indexOf(sortedArr[i]) == -1) {
                resultArr.push(sortedArr[i]);
            }
        }
        return resultArr;
    },

    square : function(arr) {
        for (let i = 0; i < arr.length; i++) {
            arr[i] *= arr[i];
        }
        return arr;
    },

    findAllOccurrences : function(arr, target) {
        let resultArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === target)
            {
                resultArr.push(i);
            }
        }
        return resultArr;
    }
};

