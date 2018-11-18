import React, {Component} from 'react';
import styled from 'styled-components';
import {ClickButton, NormalButton, Titel2White} from "../helpers/styling-texts";
import Loader from 'react-loader-spinner';
import fireBaseService from '../firebase-service.js';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import core from '../helpers/core-functions.js'

const Container = styled.div`
  width: 100%
  background-color: #6f7c94
  color: white;
  padding: 2rem;
  box-sizing: border-box;
`;

const RegisterContainer = styled.div`
    margin: 2rem;
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
    width: 80%;
    align: center;
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
    padding-top: 0.5rem;
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

const RadioButtonContainer = styled.div`
    margin-top:     .2rem;
`;
const RadiobuttonLabel = styled.label`
    margin: 0 .5rem 0 .5rem   
`;

const PriceText = styled.p`
    
`


const ALERT_TIMEOUT = 4000;


class Infos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            profile: {
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                faculty: 'ICU',
                birthday: moment("1994-01-01"),
                ticket: true,
                vegetarian: false,
                bedsheet: true,
                beerglas: false,
            },
            registerCount: 0,
            maxRegistration: 0,
            inputValid: false,
            datepickerIsOpen: false,
            showSuccessAlert: false,
            showFailureAlert: false,
        };
    }

    async componentWillMount() {
        let counts = await fireBaseService.getMaxAndConductedRegistration();
        console.log(counts);
        this.setState({
            registerCount: counts.registerCount,
            maxRegistration: counts.maxRegistration,
            loading: false,
        });
    }


    showSuccessAlert() {
        this.setState({
            successAlert: true
        });
        // hide alert after timeout
        setTimeout(() => {
            this.setState({successAlert: false});
        }, ALERT_TIMEOUT);
    }

    showFailureAlert() {
        this.setState({
            failureAlert: true,
        });
        // hide alert after timeout
        setTimeout(() => {
            this.setState({failureAlert: false});
        }, ALERT_TIMEOUT);
    }

    handleLastNameChange(event) {
        this.setState({profile: {...this.state.profile, lastName: event.target.value}});
        this.handleInputValidity()
    }

    handleFirstNameChange(event) {
        this.setState({profile: {...this.state.profile, firstName: event.target.value}});
        this.handleInputValidity()
    }

    handleFacultyChange(event) {
        this.setState({profile: {...this.state.profile, faculty: event.target.value}});
    }

    handleEmailChange(event) {
        this.setState({profile: {...this.state.profile, email: event.target.value}});
        this.handleInputValidity()
    }

    handlePhoneNumberChange(event) {
        this.setState({profile: {...this.state.profile, phone: event.target.value}});
        this.handleInputValidity()
    }

    handleInputValidity() {
        if (!this.state.inputValid) {
            if (this.isInputValid()) {
                this.setState({inputValid: true})
            }
        } else {
            if (!this.isInputValid()) {
                this.setState({inputValid: false})
            }
        }
    }

    handleDateChange(date) {
        this.setState({profile:{...this.state.profile, birthday: date}});
        this.toggleCalendar()
    }

    setTicket(state) {
        this.setState({
            profile:{...this.state.profile, ticket: state}
        });
    }

    setVegetarian(state) {
        this.setState({
            profile:{...this.state.profile, vegetarian: state}
        })
    }

    setBedSheet(state) {
        this.setState({
            profile:{...this.state.profile, bedsheet: state}
        })
    }

    setBeerGlas(state) {
        this.setState({
            profile:{...this.state.profile, beerglas: state}
        })
    }

    toggleCalendar(e) {
        e && e.preventDefault();
        this.setState({datepickerIsOpen: !this.state.datepickerIsOpen})
    }

    isInputValid() {
        if (!core.isNotEmpty(this.state.profile.firstName)) return false;
        if (!core.isNotEmpty(this.state.profile.lastName.length)) return false;
        if (!core.isNotEmpty(this.state.profile.email.length) || !core.isEmailAddress(this.state.profile.email)) return false;
        if(!core.isNumber(this.state.profile.phone) || this.state.profile.phone.length < 8) return false;
        return true
    }

    async handleSubmit() {
        let res = await fireBaseService.saveRegistration(this.state.profile, this.calculatePrice());
        if (!res) {
            this.showFailureAlert();
        } else {
            let countRes = await fireBaseService.increaseRegistrationCounter(this.state.registerCount);
            if (!countRes) {
                this.showFailureAlert();
            } else {
                this.setState({registerCount: (this.state.registerCount + 1)});
                this.showSuccessAlert();
            }
        }
    }

    calculatePrice() {
        let basePrice = 250;
        if(this.state.profile.faculty != 'ICU') basePrice += 150;
        if(this.state.profile.ticket) basePrice += 200;
        if(this.state.profile.bedsheet) basePrice += 10;
        return basePrice;
    }

    render() {
        console.log(this.calculatePrice());

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
                    <Titel2White>Registration</Titel2White>
                    {this.state.successAlert &&
                    <RegistrationAlert id='successAlert' theme={{bg: '#79c879'}}>
                        Your registration has succesfully been accepted!
                    </RegistrationAlert>
                    }
                    {this.state.failureAlert &&
                    <RegistrationAlert id='failureAlert' theme={{bg: '#f9343b'}}>
                        Registration was not successful!
                    </RegistrationAlert>
                    }
                    {(this.state.registerCount < this.state.maxRegistration) ? (
                        <div>
                            {/*Firstname*/}
                            <FieldLabel>Firstname: </FieldLabel>
                            <TextInput onChange={e => this.handleFirstNameChange(e)}/>

                            {/*Lastname*/}
                            <FieldLabel>Lastname: </FieldLabel>
                            <TextInput onChange={e => this.handleLastNameChange(e)}/>

                            {/*Email address*/}
                            <FieldLabel>Email address: </FieldLabel>
                            <TextInput onChange={e => this.handleEmailChange(e)}/>

                            {/*mobile number*/}
                            <FieldLabel>mobile number (during the Winter week): </FieldLabel>
                            <TextInput onChange={e => this.handlePhoneNumberChange(e)}/>

                            {/*Faculty*/}
                            <FieldLabel>Fachverein Member:</FieldLabel>
                            <br/>
                            <SelectField value={this.state.profile.faculty} onChange={e => this.handleFacultyChange(e)}>
                                <option value='ICU'>ICU</option>
                                <option value='FAPS'>FAPS</option>
                                <option value='OTHER'>OTHER</option>
                            </SelectField><br/>


                            {/*Date of birth*/}
                            <FieldLabel>Date of birth:</FieldLabel>
                            <NormalButton
                                className="example-custom-input"
                                onClick={this.toggleCalendar.bind(this)}>
                                {this.state.profile.birthday.format("DD MMMM YYYY")}
                            </NormalButton>
                            {
                                this.state.datepickerIsOpen && (
                                    <DatePicker
                                        selected={this.state.profile.birthday}
                                        onChange={this.handleDateChange.bind(this)}
                                        peekNextMonth
                                        showMonthDropdown
                                        showYearDropdown
                                        dropdownMode="select"
                                        withPortal
                                        inline
                                        minDate={moment('1980-01-01')}
                                        maxDate={moment('2006-12-31')}
                                    />
                                )
                            }
                            <br/>

                            {/*Skiticket*/}
                            <FieldLabel>Do you need a Skiticket?:</FieldLabel>
                            <RadioButtonContainer>
                            <RadiobuttonLabel>
                                <input type="radio" name="ticket" value="yes" onChange={() => this.setTicket(true)} checked={this.state.profile.ticket}/>
                                Yes
                            </RadiobuttonLabel>
                            <RadiobuttonLabel>
                                <input type="radio" name="ticket" value="no" onChange={() => this.setTicket(false)} checked={!this.state.profile.ticket}/>
                                No
                            </RadiobuttonLabel>
                            </RadioButtonContainer>
                            <br/>
                            {/*Vegetarian*/}
                            <FieldLabel>Are you vegetarian?:</FieldLabel>
                            <RadioButtonContainer>
                                <RadiobuttonLabel>
                                    <input type="radio" name="vegetarian" value="yes" onChange={() => this.setVegetarian(true)} checked={this.state.profile.vegetarian}/>
                                    Yes
                                </RadiobuttonLabel>
                                <RadiobuttonLabel>
                                    <input type="radio" name="vegetarian" value="no" onChange={() => this.setVegetarian(false)} checked={!this.state.profile.vegetarian}/>
                                    No
                                </RadiobuttonLabel>
                            </RadioButtonContainer>
                            <br/>
                            {/*Bedsheets*/}
                            <FieldLabel>Do you want to order bedsheets for 10.- CHF? (Otherwise you have to bring your own bedsheets or sleeping bag):</FieldLabel>
                            <RadioButtonContainer>
                                <RadiobuttonLabel>
                                    <input type="radio" name="bedsheet" value="yes" onChange={() => this.setBedSheet(true)} checked={this.state.profile.bedsheet}/>
                                    Yes
                                </RadiobuttonLabel>
                                <RadiobuttonLabel>
                                    <input type="radio" name="bedsheet" value="no" onChange={() => this.setBedSheet(false)} checked={!this.state.profile.bedsheet}/>
                                    No
                                </RadiobuttonLabel>
                            </RadioButtonContainer>
                            <br/>
                            {/*Beer glas*/}
                            <FieldLabel>The kitchen crew has the idea to order some beer glasses with a cool print of the winter weeks on it</FieldLabel>
                            <FieldLabel>As we will organize beer, you can also buy a cool souvenir for this week. The cost will be around 10-15 CHF. Details will follow</FieldLabel>
                            <FieldLabel>Are you interested in such a glas? :</FieldLabel>
                            <RadioButtonContainer>
                                <RadiobuttonLabel>
                                    <input type="radio" name="beerglas" value="yes" onChange={() => this.setBeerGlas(true)} checked={this.state.profile.beerglas}/>
                                    Yes
                                </RadiobuttonLabel>
                                <RadiobuttonLabel>
                                    <input type="radio" name="beerglas" value="no" onChange={() => this.setBeerGlas(false)} checked={!this.state.profile.beerglas}/>
                                    No
                                </RadiobuttonLabel>
                            </RadioButtonContainer>
                            <PriceText> Your price: {this.calculatePrice()}</PriceText>
                            <ClickButton onClick={() => this.handleSubmit()}
                                         disabled={!this.state.inputValid}>Submit</ClickButton>
                        </div>
                    ) : (
                        <RegisterContainer>
                            The registration is already closed as we reached the maximum number of participant!
                        </RegisterContainer>
                    )}
                </Container>
            )
        }
    }
}


export default Infos;
