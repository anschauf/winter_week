import * as firebase from "firebase";


const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);
const registrationRef = firebase.database().ref('registration');

export default {
    async getMaxAndConductedRegistration() {
        const registerCount = (await registrationRef.child('registerCount').once('value')).val();
        const maxRegistration = (await
            registrationRef.child('maxRegistration').once('value')).val();
        return {
            registerCount: registerCount,
            maxRegistration: maxRegistration
        }
    },

    async saveRegistration(_lastName, _firstName, _faculty, _email,
                           _phonenumber, _ticket, _vegetarian, _birhtday) {
        let newRegistrationRef = registrationRef.push();
        return newRegistrationRef.set({
            lastName: _lastName,
            firstName: _firstName,
            email: _email,
            faculty: _faculty,
            phonenumber: _phonenumber,
            ticket: _ticket,
            vegetarian: _vegetarian,
            birthday: _birhtday
        }).then(res => {
            return true;
        }).catch(err => {
           throw err;
        })
    },

    async increaseRegistrationCounter(old_count) {
        return registrationRef.update({registerCount: (old_count + 1)}
        ).then(res => {
            return true;
        }).catch(err => {
            throw err;
        })
    }
}