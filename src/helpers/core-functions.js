export default {
    isEmailAddress(str) {
        const pattern =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return pattern.test(str);  // returns a boolean
    },

    isNotEmpty(str) {
        var pattern =/\S+/;
        return pattern.test(str);  // returns a boolean
    },

    isNumber(str) {
        var pattern = /^\d+$/;
        return pattern.test(str);  // returns a boolean
    }
}