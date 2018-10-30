import React, {Component} from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%
  background-color: #8585ad
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

class Infos extends Component {
    render() {
        return (
            <Container>
                <Titel1>Infos über Anère</Titel1>

                <p>Beschreibung Ski Ort</p>
                <p>Datum</p>
                <p>Blablabla</p>
            </Container>
        )
    }
}

export default Infos;