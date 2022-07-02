import styled from 'styled-components'
import ReactCanvasConfetti from 'react-canvas-confetti';

//50px qnd for mobile 

export const Confetti = styled(ReactCanvasConfetti)`
    height: 50%;
    width: 50%;
    position: absolute;
    right: 20px;
    top: 0%;
    z-index: 2;
    pointer-events: none;
`