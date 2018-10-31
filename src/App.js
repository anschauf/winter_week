import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import FlexView from "react-flexview/lib/FlexView";
import Titel from "./components/Titel";
import Mountain from "./components/Mountain";
import Infos from "./components/Infos";
import RegisterForm from "./components/RegisterForm";

const BackgroundContainer = styled.div`
`;
const Wrapper = styled.div`
    width: 100%
    max-width: 1000px;
    background-color: #b7c9da;
    padding: none;
`;

class App extends Component {
  render() {
    return (

        <BackgroundContainer>
            <FlexView column height={2000} hAlignContent='center' vAlignContent='top'>
                <Wrapper>
                    <Titel></Titel>
                    <Mountain></Mountain>
                    <Infos></Infos>
                    <RegisterForm></RegisterForm>
                </Wrapper>
            </FlexView>
        </BackgroundContainer>
    );
  }
}

export default App;
