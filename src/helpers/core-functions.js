export default {
    isEmailAddress(str) {
        const pattern =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return pattern.test(str);  // returns a boolean
    },

    isNotEmpty(str) {
        var pattern =/\S+/;
        return pattern.test(str);  // returns a boolean
    },

    isPhoneNumber(str) {
        var pattern = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
        return pattern.test(str);  // returns a boolean
    }
}