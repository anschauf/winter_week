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

    async saveRegistration(profile, price) {
        let newRegistrationRef = registrationRef.push();
        return newRegistrationRef.set({
            lastName: profile.lastName,
            firstName: profile.firstName,
            email: profile.email,
            faculty: profile.faculty,
            phone: profile.phone,
            ticket: profile.ticket,
            vegetarian: profile.vegetarian,
            bedsheet: profile.bedsheet,
            beerglas: profile.beerglas,
            birthday: profile.birthday.format('YYYY-MM-DD'),
            price: price,
            email_confirmed: false
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