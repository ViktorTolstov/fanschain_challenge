/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */

module.exports = {
    globals : function() {
        let myObject = {
            name : 'Jory'
        };

        return myObject;
    },

    functions : function(flag) {
        if (flag) {
            function getValue() { return 'a'; }
        } else {
            function getValue() { return 'b'; }
        }

        return getValue();
    },

    parseInt : function(num) {
        let result = parseInt(num, 10);
        return result;
    },

    identity : function(val1, val2) {
        return val1===val2;
    }
};