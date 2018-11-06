import React, {Component} from 'react';
import styled from 'styled-components';
import {ClickButton, Titel1_White, Titel2_White} from "../helpers/styling-texts";
import * as firebase from 'firebase';


const Container = styled.div`
  width: 100%
  background-color: #6f7c94
  color: white;
  padding: 2rem;
  box-sizing: border-box;
`;
const TextInput = styled.input`
    width: 100%;
    display: online-block;
    padding: 0.5rem 0.5rem
    background-color: #7e8da8
    border: 2px solid #4f596b
    border-radius: 4px;
    margin-left: 0.3rem;
    margin-top: 0.4rem;
    color: white;
    font-size: 1rem;
    @media (max-width: 700px) {
        font-size: 0.6rem;
    }
`;

const FieldLabel = styled.label`
    display: block;
    padding-top: 1rem;
`;


const SelectField = styled.select`
    border: 2px solid #4f596b
    border-radius: 4px;
    margin-left: 0.3rem;
    margin-top: 0.4rem;
    padding: 0.5rem 0.5rem
    background-color: #7e8da8
    color: white
    font-size: 1rem
    @media (max-width: 700px) {
        font-size: 0.6rem;
    }
`;


// Initialize Firebase
const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
};


class Infos extends Component {


    //TODO refactoring of firebase initialization
    constructor(props) {
        super(props);

        firebase.initializeApp(config);
        this.state = {
            registrationRef: firebase.database().ref('registration'),
            faculty: 'ICU',
            firstName: '',
            lastName: '',
            email: ''
        };

        //TODO if count reached max --> show other view
        let newRegisterCount =  this.state.registrationRef.child('registerCount');
        console.log(newRegisterCount);
        newRegisterCount.once('value').then((snapshot) => {
            console.log("COUNT: " + snapshot.val());
        });
    }



    handleSubmit() {
        console.log(this.state.lastName);
        console.log(this.state.firstName);
        console.log(this.state.faculty);
        console.log(this.state.email);

        this.saveRegistration(this.state.lastName, this.state.firstName, this.state.faculty, this.state.email);
        //TODO message if failure/success
    }

    // Save registration to firebase
    saveRegistration(lastName, firstName, faculty, email) {
        let newRegistrationRef =  this.state.registrationRef.push();
        console.log(newRegistrationRef.toString());
        newRegistrationRef.set({
            lastName: lastName,
            firstName: firstName,
            email: email,
            faculty: faculty
        });
    }
    handleLastNameChange(event) {
        this.setState({lastName: event.target.value})
    }

    handleFirstNameChange(event) {
        this.setState({firstName: event.target.value})
    }

    handleFacultyChange(event) {
        this.setState({faculty: event.target.value})
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value})
    }

    /** TODO validation! **/
    render() {
        return (
            <Container>
                <Titel2_White>Registration</Titel2_White>
                <FieldLabel>Firstname: </FieldLabel>
                <TextInput onChange={e => this.handleFirstNameChange(e)}/>
                <FieldLabel>Lastname: </FieldLabel>
                <TextInput onChange={e => this.handleLastNameChange(e)}/>
                <FieldLabel>Email address: </FieldLabel>
                <TextInput onChange={e => this.handleEmailChange(e)}/>
                <FieldLabel>Fachverein Member:</FieldLabel>
                <br/>
                <SelectField value={this.faculty} onChange={e => this.handleFacultyChange(e)}>
                    <option value='ICU'>ICU</option>
                    <option value='FAPS'>FAPS</option>
                    <option value='OTHER'>OTHER</option>
                </SelectField><br/>
                <ClickButton onClick={() => this.handleSubmit()}>Submit</ClickButton>

            </Container>
        )
    }
}


export default Infos;