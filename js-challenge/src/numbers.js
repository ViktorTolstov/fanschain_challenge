module.exports = {
    valueAtBit: function(num, bit) {
        numIn2 = num.toString(2)
        return bit > numIn2.length ? 0 : parseInt(numIn2[numIn2.length - bit], 2)
    },

    base10: function(str) {
        let num = parseInt(str, 2)
        return num
    },

    convertToBinary: function(num) {
        let bin =  "00000000" + num.toString(2);
        return bin.slice(-8)
    },

    multiply: function(a, b) {
        const multiplierForceCounter = (num) => {
            return (num.toString().includes('.')) ? (num.toString().split('.').pop().length) : (0)
        }
        let multiplierForceA = multiplierForceCounter(a);
        let multiplierForceB = multiplierForceCounter(b);
        let resultMultiplier = multiplierForceA > multiplierForceB ? amultiplierForceA * 10 : multiplierForceB * 10;
        return (a * resultMultiplier * b * resultMultiplier) / (resultMultiplier * resultMultiplier);
    }
};
