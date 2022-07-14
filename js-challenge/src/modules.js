module.exports = {
    createModule : function(str1, str2) {
        let person = {
            name: str2,
            greeting: str1,
            
            sayIt () {
                return this.greeting + ", " + this.name;
            }
        }
        return person;
    }
};

