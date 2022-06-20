import Styled from "styled-components";

export const ContainerBotoes = Styled.section`
    margin-top: 30px;
    display: flex;

    position: relative;

    div{
        height: 15px;
        width: 15px;
        transition: transform 0.5s ease-in-out;
        transform: ${(props) => (props.disable ? "scale(1.9)" : "scale(1)")};
        cursor: pointer;
    }
`;

export const BotaoStart = Styled.div`
    background-color: green;
    border-radius: 50%;
    position: absolute;
    right: 0px;

    opacity: ${(props) => (props.disable ? 1 : 0.2)};

`;

export const BotaoStop = Styled.div`
    background-color: black;

    border-radius: 50%;

    position: absolute;
    right: 74px;

    opacity: ${(props) => (props.disable ? 1 : 0.2)};

`;

export const BotaoClear = Styled.div`
    background-color: gray;

    border-radius: 50%;

    position: absolute;
    right: 150px;

    opacity: ${(props) => (props.disable ? 1 : 0.2)};
    

`;
