//Importing libs
import styled from 'styled-components'
import { Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons';

type ButtonProps = {
    selectedButton: boolean
}

const activeButtonStyle = `
        border: 1px solid #4DA6B3;
        background: #F7F7F8 0% 0% no-repeat padding-box;
        color: #4DA6B3;
    `

export const FilterAreaContainer = styled.div`
    display: flex;
    margin: 10px auto;
    width: 100%;
    justify-content: space-around;

    @media only screen and (max-width: 620px) {
        flex-direction: column-reverse;
        align-items: center;
    }
`

export const FilterButtonsContainer = styled.div`
    display: flex;

    @media only screen and (max-width: 620px) {
        justify-content: end;
        margin: 5px;
        width: 90%;
        max-width: 510px;

    }
`

export const SearchAreaContainer = styled.div`
    position: relative;

    @media only screen and (max-width: 620px) {
        width: 90%;
        max-width: 500px;
    }
`

export const SearchArea = styled.input`
    min-width: 350px;
    padding: 10px;
    outline: none;
    border: 1px solid #dbdbdb;
    border-radius: 5px;

    @media only screen and (max-width: 620px) {
        width: 100%;
        min-width: auto;
    }
`

export const SearchIcon = styled(SearchOutlined)`
    position: absolute;
    top: 30%;
    right: 10px;
    font-size: 18px;
`

export const FilterButton = styled(Button) <ButtonProps>`
    margin: 0 5px;
    padding: 5px 10px;
    border-radius: 23px;
    color: #848484;
    height: 35px;

    ${props => props.selectedButton && activeButtonStyle}

    &:hover, &:active, &:focus {
       ${activeButtonStyle}
    }
`

