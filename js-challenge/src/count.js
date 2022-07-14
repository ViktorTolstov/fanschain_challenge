
module.exports = {
    count : function (start, end) {
        let currentCount = start;
        console.log(currentCount);
        var timerId = setInterval(function() {
            currentCount++;
            console.log(currentCount);
            if (currentCount == end)
            {
                clearInterval(timerId);
            }
        }, 100);

        const cancel = () => {clearInterval(timerId)}

        return {
            cancel
        }
    }
};

