module.exports = {
    listFiles: function (data, dirName) {
        let resultArr = [];
        let testDirName = dirName === data.dir ? undefined : dirName;
        data.files.forEach(element => {
            if (typeof (element) === 'object') {
                resultArr = resultArr.concat(this.listFiles(element, testDirName));
            }
            else if (typeof (element) === 'string' && !testDirName) {
                resultArr.push(element);
            }
        });
        return resultArr;
    },

    permute: function (arr) {

    },

    fibonacci: function (n) {

    },

    validParentheses: function (n) {

    }
};
