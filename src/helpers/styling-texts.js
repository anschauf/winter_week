import styled from "styled-components";

export const Titel1Darkblue = styled.b`
    color: #202c3e;
    font-weight: '900';
    font-size: 11rem;
    margin-block: none;
    @media (max-width: 850px) {
        font-size: 7rem;
    }
    @media (max-width: 700px) {
        font-size: 4rem;
    }
`;

export const Titel1White = styled.b`
    color: white;
    font-familiy: 'Impact';
    font-weight: '1200';
    font-size: 13rem;
    @media (max-width: 850px) {
        font-size: 7rem;
    }
    @media (max-width: 700px) {
        font-size: 4rem;
    }
`;

export const Titel2Darkblue = styled.b`
    color: #202c3e;
    font-familiy: 'Impact';
    font-weight: '900';
    font-size: 4rem;
    @media (max-width: 850px) {
        font-size: 3.0rem;
    }
    @media (max-width: 700px) {
        font-size: 1.5rem;
    }
`;

export const Titel2White = styled.b`
    color: white;
    font-familiy: 'Impact';
    font-weight: '900';
    font-size: 4rem;
    @media (max-width: 850px) {
        font-size: 3.0rem;
    }
    @media (max-width: 700px) {
        font-size: 1.5rem;
    }
`;

export const ClickButton = styled.button`
    color: ${props => props.disabled ? '#d6d6d6' : '#202c3e'}
    font-size: 1.5rem;
    margin: 0.3rem;
    margin-top: 1rem
    border-radius: 4px;
    border: 2px solid ${props => props.disabled ? 'd6d6d6' : '#4f596b'}
    background-color: white
    padding: 0.5rem
    min-width: 10rem
        @media (max-width: 700px) {
        font-size: 0.8rem;
    }
`;
