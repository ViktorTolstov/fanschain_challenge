module.exports = {
    alterContext : function(fn, obj) {
        return fn.call(obj);
    },

    alterObjects : function(constructor, greeting) {
        constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
        let resultArr = [];
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                resultArr.push(key + ': ' + obj[key]);
            }
        }
        return resultArr;
    }
};
