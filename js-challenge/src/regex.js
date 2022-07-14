module.exports = {
    containsNumber : function(str) {
        return /\d/.test(str);
    },

    containsRepeatingLetter : function(str) {
        return /([a-zA-Z]).*?\1/.test(str);
    },

    endsWithVowel : function(str) {
        return /[aeiouAEIOU]$/.test(str);
    },

    captureThreeNumbers : function(str) {
        let regex = /\d{3}/;
        let regexTest = regex.test(str);
        return regexTest ? str.match(regex)[0] : regexTest;
    },

    matchesPattern : function(str) {
        return /^\d{3}-\d{3}-\d{4}$/.test(str);
    },

    isUSD : function(str) {
        return /^\$\d+(,\d{3})*(\.[0-9]{2})?$/.test(str);
    }
};
