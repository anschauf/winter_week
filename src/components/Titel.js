import React, {Component} from 'react';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  width: 100%
`;

const Titel1 = styled.h1`
    font-size: 7rem;
    color: #202c3e;
    font-familiy: 'Impact'
    font-weight: '900'
`;

const Titel2 = styled.h1`
    font-size: 7rem;
    color: white;
    font-familiy: 'Impact'
    font-weight: '900'
`;

class Titel extends Component {
    render() {
        return (
            <Container>
                <Titel1>Winter Week 2019</Titel1>
                <Titel2>anzère</Titel2>
            </Container>
        )
    }
}

export default Titel;