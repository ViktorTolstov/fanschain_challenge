module.exports = {
    fizzBuzz : function(num) {
        // write a function that receives a number as its argument;
        // if the number is divisible by 3, the function should return 'fizz';
        // if the number is divisible by 5, the function should return 'buzz';
        // if the number is divisible by 3 and 5, the function should return
        // 'fizzbuzz';
        //
        // otherwise the function should return the number, or false if no number
        // was provided or the value provided is not a number

        if (typeof(num) === "number")
        {
            let isDivisible3 = num % 3 === 0;
            let isDivisible5 = num % 5 === 0;
            if (isDivisible3 && isDivisible5)
            {
                return 'fizzbuzz'
            }
            else if (isDivisible3)
            {
                return 'fizz'
            }
            else if (isDivisible5)
            {
                return 'buzz'
            }
            return num;
        }

        return false;
    }
};
