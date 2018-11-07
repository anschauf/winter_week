import React, {Component} from 'react';
import styled from 'styled-components';
import {ClickButton, Titel1_White, Titel2_White} from "../helpers/styling-texts";
import * as firebase from 'firebase';
import Loader from 'react-loader-spinner'


const Container = styled.div`
  width: 100%
  background-color: #6f7c94
  color: white;
  padding: 2rem;
  box-sizing: border-box;
`;

const LoaderCointainer = styled.div`
    margin: auto;
    width: 80px;
    background-color: #6f7c94
    padding-top: 5rem;
    padding-bottom: 5rem;
    margin-bottom: 10px;
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

const RegistrationAlert = styled.div`
    text-align: center;
    padding: 10px;
    background: ${props => props.theme.bg};
    border-radius: 20px;
    margin: 1rem;
`;
//background: #79c879;
// Initialize Firebase
const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
};

const ALERT_TIMEOUT = 4000;


class Infos extends Component {

    constructor(props) {
        super(props);

        firebase.initializeApp(config);
        this.state = {
            registrationRef: firebase.database().ref('registration'),
            loading: true,
            faculty: 'ICU',
            firstName: '',
            lastName: '',
            email: '',
            registerCount: 0,
            maxRegistration: 0
        };
    }

    async componentWillMount() {
        let counts = await this.getMaxAndConductedRegistration();
        this.setState({
            registerCount: counts.registerCount,
            maxRegistration: counts.maxRegistration,
            loading: false,
            showSuccessAlert: false,
            showFailureAlert: false,
            errorMessage: ''
        });
    }

    // gets the maxRegistration and the registrationCount from firebase
    async getMaxAndConductedRegistration() {
        const registerCount = (await this.state.registrationRef.child('registerCount').once('value')).val();
        const maxRegistration = (await
            this.state.registrationRef.child('maxRegistration').once('value')).val();
        return {
            registerCount: registerCount,
            maxRegistration: maxRegistration
        }
    }

    handleSubmit() {
        this.saveRegistration(this.state.lastName, this.state.firstName, this.state.faculty, this.state.email);
    }

    // Save registration to firebase && trigger alert handling
    saveRegistration(lastName, firstName, faculty, email) {
        let newRegistrationRef = this.state.registrationRef.push();
        newRegistrationRef.set({
            lastName: lastName,
            firstName: firstName,
            email: email,
            faculty: faculty
        }).then(res => {
            // show success alert
            this.setState({successAlert: true});
            // hide alert after timeout
            setTimeout(() => {
                this.setState({successAlert: false});
            }, ALERT_TIMEOUT);
        }).catch(err => {
            this.setState({
                failureAlert: false,
                errorMessage: err
            });
            // hide alert after timeout
            setTimeout(() => {
                this.setState({failureAlert: false});
            }, ALERT_TIMEOUT);
        })
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

        if (this.state.loading) {
            return (
                <Container>
                    <LoaderCointainer>
                        <Loader type="Oval" color="white" height={80} width={80}/>
                    </LoaderCointainer>
                </Container>
            )
        } else {
            return (
                <Container>
                    <Titel2_White>Registration</Titel2_White>
                    {this.state.successAlert &&
                        <RegistrationAlert id='successAlert' theme={{bg: '#79c879'}}>
                            Your registration has succesfully been accepted!
                        </RegistrationAlert>
                    }
                    {this.state.failureAlert &&
                        <RegistrationAlert id='failureAlert' theme={{bg: '#f9343b'}}>
                            Registration was not successful! ${this.state.errorMessage}
                        </RegistrationAlert>
                    }
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
}


export default Infos;
