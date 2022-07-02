import styled from 'styled-components';
// 768
export const ContainerWrapper = styled.div`
    height: 50%;
    position: absolute;
    margin: auto;
    top: 10%;
    left: 0;
    right: 0;
    width: 80%;

    @media only screen and (min-width: 850px){
        min-height: 650px;
        max-height: 650px;
        min-width: 850px;
        max-width: 850px;
}

    @media only screen and (max-width: 849px) {
        width: 90%
    }

    @media only screen and (max-width: 849px) {
        width: 100%
    }
`