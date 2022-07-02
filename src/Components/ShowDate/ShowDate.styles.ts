import styled from 'styled-components'

export const DateContainer = styled.div `
    display: flex;
    width: 80%;
    justify-content: space-between;
    align-items: center;
    margin: auto;
`

export const DateNumbersContainer = styled.div`
    display: flex;
`

export const DayValue = styled.h1`
    margin: 0;
    font-size: 50px;

    @media only screen and (max-width: 400px) {
       font-size: 40px; 
    }
`

export const MonthYearContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 18px;

    @media only screen and (max-width: 400px) {
        font-size: 15px; 
     }
`

export const DayName = styled.span`
    font-size: 30px;

    @media only screen and (max-width: 400px) {
        font-size: 20px; 
     }
`