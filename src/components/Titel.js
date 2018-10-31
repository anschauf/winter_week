import React, {Component} from 'react';
import styled from 'styled-components';
import {Titel1_Darkblue, Titel1_White} from '../helpers/styling-texts';

const Container = styled.div`
  text-align: center;
  width: 100%
`;



class Titel extends Component {
    render() {
        return (
            <Container>
                <Titel1_Darkblue>Winter Week 2019</Titel1_Darkblue>
                <Titel1_White>anzère</Titel1_White>
            </Container>
        )
    }
}

export default Titel;