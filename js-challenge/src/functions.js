module.exports = {
    argsAsArray : function(fn, arr) {
        let result = fn(...arr);
        return result;
    },

    speak : function(fn, obj) {
        obj.speak = fn;
        var result = obj.speak();
        return result;
    },

    functionFunction : function(str) {
        let concatFn = (elem) => {
            return str + ", " + elem;
        }
        return concatFn;    
    },

    makeClosures : function(arr, fn) {
        var resultArr = [];
        for (let i = 0; i < arr.length; i++) {
            resultArr.push(() => fn(arr[i]));
        }
        return resultArr;
    },

    partial : function(fn, str1, str2) {
        const partial = (str3) => fn(str1, str2, str3);
        return partial;
    },

    useArguments : function(...args) {
        let sum = 0;
        args.forEach(element => {
            sum += element;
        });
        return sum;
    },

    callIt : function(fn, ...args) {
        return fn(...args);
    },

    partialUsingArguments : function(fn, ...args1) {
        let result = (...args2) => {
            return fn(...args1.concat(...args2));
        }
        return result; 
    },

    curryIt : function(fn) {
        let resultFn = (num1) => (num2) => (num3) => fn(num1, num2, num3)
        return resultFn
    }
};

