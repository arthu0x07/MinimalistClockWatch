import Styled from "styled-components";

export const ContainerBotoes = Styled.section`
    margin-top: 30px;
    display: flex;

    position: relative;

    div{
        height: 15px;
        width: 15px;
        transition: transform 0.5s ease-in-out;

        :hover{
            transform: scale(1.9);
        }
    }
`;

export const BotaoStart = Styled.div`
    background-color: green;

    border-radius: 50%;

    position: absolute;
    right: 0px;
`;

export const BotaoStop = Styled.div`
    background-color: black;

    border-radius: 50%;

    position: absolute;
    right: 74px;
`;

export const BotaoClear = Styled.div`
    background-color: gray;

    border-radius: 50%;

    position: absolute;
    right: 150px;
`;
