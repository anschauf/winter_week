import React, {Component} from 'react';
import styled from 'styled-components';
import {Titel1Darkblue, Titel1White} from '../helpers/styling-texts';

const Container = styled.div`
  text-align: center;
  position: relative;
  width: 100%;
  margin: none;
  min-height: 580px;
  @media (max-width: 850px) {
    min-height: 340px
  } 
  @media (max-width: 700px) {
    min-height: 200px
    }
`;

const FirstLine = styled.div`
    position: absolute;
    width: 100%
    text-align: center
`;


class Titel extends Component {
    render() {
        return (
            <Container>
                <FirstLine>
                <Titel1Darkblue>Winter</Titel1Darkblue>
                <br/>
                <Titel1Darkblue>Week 19</Titel1Darkblue>
                <br/>
                <Titel1White>anzère</Titel1White>
                </FirstLine>
            </Container>
        )
    }
}

export default Titel;