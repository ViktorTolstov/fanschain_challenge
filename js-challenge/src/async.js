module.exports = {
    async: function (value) {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(value);
            }, 200); // just a test time value
        });
        return promise;
    },

    manipulateRemoteData: function (url) {
        let resultArr = [];
        let promise = fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            let people = data.people;
            people.forEach(person => {
                resultArr.push(person.name)
            });
            resultArr.sort()
            return resultArr;
        });
        return promise;
    }
};
