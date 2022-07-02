import styled from 'styled-components'
import { PlusOutlined } from '@ant-design/icons'

type AddItemsButtonProps = {
    addItemsInput: string
}

export const AddItemsContainer = styled.div`
    width: 100%;
    height: calc(100% - 145px);
`

export const AddItemsInputContainer = styled.div`
    width: 80%;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    margin: auto;

    @media only screen and (max-width: 768px) {
        width: 86%;
    }
`

export const AddItemsInput = styled.input`
    min-width: calc(100% - 50px);
    padding: 12px 10px;
    outline: none;
    border-right: none;
    border-radius: 5px 0px 0px 5px;
    border: none;
`

export const AddItemsButton = styled.button<AddItemsButtonProps>`
    width: 50px;
    border: 1px solid #98c2c9;
    border-left: none;
    padding: 12px;
    border-radius: 0 5px 5px 0;
    background: #4da6b3;
    cursor: ${props => props.addItemsInput ? 'pointer' : 'not-allowed'};
    opacity: ${props => !props.addItemsInput ? 0.7 : 1}
`

export const AddItemsItemContainer = styled.div`
    width: 100%;
    margin: 10px 0;
    height: calc(100% - 75px);
    overflow: auto;
`

export const PlusIcon = styled(PlusOutlined) `
    background: #fff;
    padding: 4px;
    border-radius: 50%;
    color: #4da6b3;
`