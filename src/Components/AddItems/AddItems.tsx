import { useState } from 'react';
import { FilterType, Items } from '../../utils/types';

//Importing libs
import { toast } from 'react-toastify';

//Importing styled-components
import { AddItemsContainer, AddItemsInputContainer, AddItemsInput, AddItemsButton, AddItemsItemContainer, PlusIcon } from './AddItems.styles'

import Item from '../Item/Item';

type AddItemsProsp = {
    items: Items[]
    oldItems: Items[]
    setItems: (value: Items[]) => void
    filterType: FilterType
    setFilterType: (value: FilterType) => void
    searchField: string
    setSearchField: (value: string) => void
}

const AddItems = ({ items, oldItems, setItems, filterType, setFilterType, searchField, setSearchField }: AddItemsProsp) => {
    const [addItemsInput, setAddItemsInput] = useState<string>('')

    const handleClick = () => {
        const auxArr = [...oldItems]
        auxArr.push({ value: addItemsInput, status: 'pending', itemIndex: auxArr.length > 0 ? auxArr.length : 0 })
        setTimeout(() => {
            setItems(auxArr)
        }, 0)
        setAddItemsInput(prev => '')
    }

    const handleChange = ({target: {value}}: React.ChangeEvent<HTMLInputElement>) => {
        setAddItemsInput(value)
    }

    const changeItemStatus = (itemIndex: number, action: string) => {
        const newItems = [...oldItems]
        const index = newItems.findIndex(item => item.itemIndex === itemIndex)
        if (action === 'remove') {
            newItems.splice(index, 1)
            toast.success('Item removed')
        } else {
            newItems[index].status = 'done'
            toast.success('Item completed')
        }
        setItems(newItems)
    }

    const changeItemValue = (itemIndex: number, value: string) => {
        const newItems = items
        const index = newItems.findIndex(item => item.itemIndex === itemIndex)
        newItems[index].value = value
        setItems(newItems)
    }

    const clearFilters = () => {
        setFilterType('')
        setSearchField('')
    }

    return (
        <AddItemsContainer>
            {!(filterType || searchField) &&
                <AddItemsInputContainer className="add-item-input">
                    <AddItemsInput id="add-item-field" placeholder="Add new item" onChange={e => handleChange(e)} value={addItemsInput} type="text" />
                    <AddItemsButton id="add-item-btn" disabled={!addItemsInput} addItemsInput={addItemsInput} onClick={handleClick}>
                        <PlusIcon />
                    </AddItemsButton>
                </AddItemsInputContainer>}
            <AddItemsItemContainer>
                {items?.map((item, idx) =>
                    <Item key={idx} idx={idx} item={item} changeItemValue={changeItemValue} changeItemStatus={changeItemStatus} />
                )}
                {((filterType || searchField) && items.length === 0) &&
                    <div>
                        There are no items marked as done. <span id="clear-filter" style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={() => clearFilters()}>Clear the filter here to see all items.</span>
                    </div>
                }
            </AddItemsItemContainer>
        </AddItemsContainer>
    );
};

export default AddItems;