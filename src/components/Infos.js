import React, {Component} from 'react';
import styled from 'styled-components';
import {Titel2White} from "../helpers/styling-texts";

const Container = styled.div`
  width: 100%
  background-color: #8585ad
  color: white;
  padding: 2rem;
  box-sizing: border-box;
`;


class Infos extends Component {
    render() {
        return (
            <Container>
                <Titel2White>Infos über Anzère</Titel2White>

                <p>Beschreibung Ski Ort</p>
                <p>Datum</p>
                <p>Blablabla</p>
            </Container>
        )
    }
}

export default Infos;