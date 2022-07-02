import { shallow } from 'enzyme'
import Item from './Item'
import { Items } from '../../utils/types';

describe('Item', () => {

    const mockIndex = 0
    const mockItem:Items = {value: 'item 1', status: 'done', itemIndex: 0}
    const mockChangeItemValue = jest.fn()
    const mockChangeItemStatus= jest.fn()

    const itemWrapper = shallow(<Item idx={mockIndex} item={mockItem} changeItemStatus={mockChangeItemStatus} changeItemValue={mockChangeItemValue} />)

    it('expect to render Item component', () => {
        expect(itemWrapper).toMatchSnapshot()
    })

    it('expect to item buttons should be displayed', () => {
        const itemContainer = itemWrapper.find('[id="item-container"]')
        itemContainer.simulate('click')
        expect(itemWrapper.find('[id="remove-btn"]').length).toBe(1)
        expect(itemWrapper.find('[id="done-btn"]').length).toBe(1)
    })

    it('expect to item input value should change', () => {
        const itemInput = itemWrapper.find('[id="item-input"]')
        itemInput.simulate('change', {target: {value: {index: 0, value: 'item 2'}}})
        expect(mockChangeItemValue).toBeCalled()
    })

    it('expect to item status should be "done"', () => {
        const itemContainer = itemWrapper.find('[id="item-container"]')
        itemContainer.simulate('click')
        itemWrapper.find('[id="done-btn"]').simulate('click')
        expect(mockChangeItemStatus).toBeCalled()
    })

    it('expect to item value can not be empty', () => {
        const itemInput = itemWrapper.find('[id="item-input"]')
        itemInput.simulate('change', {target: {value: {index: 0, value: ''}}})
        setTimeout(() => {
            itemWrapper.find('[id="done-btn"]').simulate('click')
            expect(mockChangeItemStatus).not.toBeCalled()
        }, 500)
    })
})