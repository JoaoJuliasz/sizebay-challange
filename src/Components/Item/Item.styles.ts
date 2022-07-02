import styled from "styled-components";
import { MinusOutlined, CheckOutlined } from '@ant-design/icons'

type ItemInputProps = {
    editCurrentItem: boolean
    done: boolean
}

type ButtonProps = {
    color: string
    hasBorder?: boolean
}

export const ItemContainer = styled.div`
    width: 80%;
    margin: 7px auto;

    @media only screen and (max-width: 600px) {
        width: 86%
    }
`

export const ItemComponentsContainer = styled.div`
    width: 100%;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    margin: auto;
`

export const ItemInput = styled.input<ItemInputProps>`
    width: 100%;
    max-width: ${(props) => props.editCurrentItem ? 'calc(100% - 100px)' : ''};
    padding: 12px 10px;
    outline: none;
    background: ${(props) => props.done ? '#00ff6263' : (!(props.editCurrentItem) ? '#f4f4f4' : '#fff')};
    border: none;
    border-radius: ${(props) => props.editCurrentItem ? '3px 0 0 3px' : '5px'};
    cursor: ${props => props.editCurrentItem ? '' : 'pointer'};
`

export const ItemButton = styled.button<ButtonProps>`
    padding: 13px 0;
    width: 50px;
    border: none;
    cursor: pointer;
    background: ${props => props.color};
    ${props => props.hasBorder && 'border-radius: 0 3px 3px 0'}
`

export const MinusIcon = styled(MinusOutlined) `
    background: #fff;
    padding: 4px;
    border-radius: 50%;
    color: #e34f4f;
`
export const CheckIcon = styled(CheckOutlined) `
    background: #fff;
    padding: 4px;
    border-radius: 50%;
    color: #68e291;
`
