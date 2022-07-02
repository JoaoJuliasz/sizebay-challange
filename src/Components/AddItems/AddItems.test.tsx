import React from 'react';
import { shallow } from 'enzyme'
import AddItems from './AddItems'
import { FilterType, Items } from '../../utils/types';

describe('AddItems', () => {

    const mockItems = (items: Items[], filterType: FilterType, searchField: string) => {
        return items.filter(item => item.status.includes(filterType) && item.value.includes(searchField))
    }

    const mockOldItems: Items[] = [
        { value: 'item 1', status: 'done', itemIndex: 0 },
        { value: 'item 2', status: 'pending', itemIndex: 1 },
    ]
    let mockSearchField = ''
    let mockFilterType: FilterType = ''
    const mockSetSearchField = jest.fn();
    const mockSetFilterType = jest.fn();
    const mockSetItems = jest.fn();

    const addItemsWrapper = (filterType?: boolean) => shallow(<AddItems items={filterType ? [] : mockItems(mockOldItems, '', '')} oldItems={mockOldItems}
        filterType={filterType ? 'done' : mockFilterType} setFilterType={mockSetFilterType} searchField={mockSearchField} setSearchField={mockSetSearchField} setItems={mockSetItems} />)

    it('Should render AddItems component', () => {
        expect(addItemsWrapper()).toMatchSnapshot()
    })

    it('Button should be disabled false', () => {
        addItemsWrapper().find('[id="add-item-field"]').simulate("change", { target: { value: "Test" } })
        setTimeout(() => {
            expect(addItemsWrapper().find('[id="add-item-field"]').prop('value')).toStrictEqual("Test")
            expect(addItemsWrapper().find('[id="add-item-btn"]').props().disabled).toBe(false)
            addItemsWrapper().find('[id="add-item-btn"]').simulate('click')
            expect(mockSetItems).toBeCalledTimes(1)
        }, 500)
    })

    it('Filters should be cleaned', () => {
        const clearButton = addItemsWrapper(true).find('[id="clear-filter"]')
        clearButton.simulate('click')
        expect(mockSetFilterType).toBeCalledTimes(1)
    })
})