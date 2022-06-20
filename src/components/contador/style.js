import Styled from "styled-components";

export const ContainerContador = Styled.div`
    width: 150px;
    height: 40px;

    display: flex;
    justify-content: center;
    align-items: start;


    font-size: 34px;

    span{
        font-style: italic;
        margin-right: 5px;
        position: relative;
        
        :after{
            content: ' ';
            width: 5px;
            height: 5px;
            border-radius: 50%;
            background-color: var(--color-pointers-counter);;
            
            position: absolute;
            bottom: 10px;
            right: -4px;
        }

        :before{
            content: ' ';
            width: 5px;
            height: 5px;
            border-radius: 50%;
            background-color: var(--color-pointers-counter);;

            position: absolute;
            top: 10px;
            right: -7px;
        }
    }
`;

export const ContainerHoras = Styled.div`
`;

export const ContainerMinutos = Styled.div`
`;

export const ContainerSegundos = Styled.div`
    
    span{
        :after{
            content: none;
        }

        :before{
            content: none;
        }
    }
`;
