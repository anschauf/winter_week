import React, {Component} from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%
  background-color: #6f7c94
  color: white;
  padding: 2rem;
  box-sizing: border-box;
`;

const Titel1 = styled.p`
    font-size: 4rem;
    color: white;
    font-familiy: 'Impact'
    font-weight: '700'
`;

const InputField = styled.div`
    padding: 0.3rem;
    font-size: 1.2rem
`;
const TextInput = styled.input`
    width: 100%;
    display: online-block;
    padding: 0.5rem 0.5rem
    background-color: #7e8da8
    border: 2px solid #4f596b
    border-radius: 4px;
    margin-top: 0.4rem
    color: white
    font-size: 1rem
`;

const SelectField = styled.select`
    border: 2px solid #4f596b
    border-radius: 4px;
    margin-top: 0.4rem;
    padding: 0.5rem 0.5rem
    background-color: #7e8da8
    color: white
    font-size: 1rem
    
`;

const SubmitButton = styled.button`
    color: #202c3e
    font-size: 2rem
    margin: 0.5rem
    border-radius: 4px;
    border: 2px solid #4f596b
    background-color: white
    padding: 0.5rem
    min-width: 10rem
`;

class Infos extends Component {


    constructor(props) {
        super(props);
        this.state = {
            faculty: 'ICU',
            preName: '',
            lastName: ''
        };

    }


    handleSubmit() {
        console.log(this.state.lastName);
        console.log(this.state.preName);
        console.log(this.state.faculty)
    }

    handleLastNameChange(event) {
        this.setState({lastName: event.target.value})
    }

    handlePreNameChange(event) {
        this.setState({preName: event.target.value})
    }

    handleFacultyChange(event) {
        this.setState({faculty: event.target.value})
    }

    render() {
        return (
            <Container>
                <Titel1>Registration</Titel1>
                <InputField>
                    <label>Prename: </label>
                    <TextInput onChange={e => this.handlePreNameChange(e)}/>
                </InputField>
                <InputField>
                    <label>Lastname: </label>
                    <TextInput onChange={e => this.handleLastNameChange(e)}/>
                </InputField>
                <InputField>
                    <label>Fachverein Member:</label>
                    <br/>
                    <SelectField value={this.faculty} onChange={e => this.handleFacultyChange(e)}>
                        <option value='ICU'>ICU</option>
                        <option value='FAPS'>FAPS</option>
                        <option value='OTHER'>OTHER</option>
                    </SelectField>
                </InputField>
                <SubmitButton onClick={() => this.handleSubmit()}>Submit</SubmitButton>

            </Container>
        )
    }
}


export default Infos;