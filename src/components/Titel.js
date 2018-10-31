import React, {Component} from 'react';
import styled from 'styled-components';
import {Titel1_Darkblue, Titel1_White} from '../helpers/styling-texts';

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
                <Titel1_Darkblue>Winter</Titel1_Darkblue>
                <br/>
                <Titel1_Darkblue>Week 19</Titel1_Darkblue>
                <br/>
                <Titel1_White>anzère</Titel1_White>
                </FirstLine>
            </Container>
        )
    }
}

export default Titel;