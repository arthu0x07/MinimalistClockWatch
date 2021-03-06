import Styled from "styled-components";

export const ContainerBotoes = Styled.section`
    margin-top: 30px;
    display: flex;

    position: relative;

    div{
        height: 15px;
        width: 15px;
        transition: transform 0.5s ease-in-out;
        cursor: pointer;
    }
`;

export const BotaoStart = Styled.div`
    background-color: green;
    border-radius: 50%;
    position: absolute;
    right: 0px;
    transform: scale(1);

    opacity: ${(props) => (props.disable ? 1 : 0.2)};
    transform: ${(props) => (props.disable ? "scale(1.9)" : "scale(1)")};

`;

export const BotaoStop = Styled.div`
    background-color: black;

    border-radius: 50%;

    position: absolute;
    right: 74px;
    transform: scale(1);


    opacity: ${(props) => (props.disable ? 1 : 0.2)};
    transform: ${(props) => (props.disable ? "scale(1.9)" : "scale(1)")};

`;

export const BotaoClear = Styled.div`
    background-color: gray;

    border-radius: 50%;

    position: absolute;
    right: 150px;
    transform: scale(1);


    opacity: ${(props) => (props.disable ? 1 : 0.2)};
    transform: ${(props) => (props.disable ? "scale(1.9)" : "scale(1)")};


`;
