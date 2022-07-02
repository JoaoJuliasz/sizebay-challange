import { shallow } from 'enzyme'
import FilterArea from './FilterArea'
import { Items } from '../../utils/types';

describe('FilterArea', () => {

    let mockSearchField = ''
    let mockFilterType = ''
    const mockSetSearchField = jest.fn();
    const mockSetFilterType = jest.fn();

    const mockItems:Items[] = [
        {value: 'item 1', status: 'done', itemIndex: 0},
        {value: 'item 2', status: 'pending', itemIndex: 1},
    ]

    const mockFilterItems = (type: 'value' | 'status', filter: string) => mockItems.filter((item: Items) => item[type]?.includes(filter))

    const filterAreaWrapper = shallow(<FilterArea searchField={mockSearchField} filterType={mockFilterType}
        setSearchField={mockSetSearchField} setFilterType={mockSetFilterType} />)

    it('expect to render FilterArea component', () => {
        expect(filterAreaWrapper).toMatchSnapshot()
    })

    it('expect to filter done items', () => {
        filterAreaWrapper.find('[id="done"]').simulate('click')
        expect(mockSetFilterType).toHaveBeenCalled()
        expect(mockFilterItems('status', 'done').length).toEqual(1)
    })
    it('expect to filter pending items', () => {
        filterAreaWrapper.find('[id="pending"]').simulate('click')
        expect(mockSetFilterType).toHaveBeenCalled()
        expect(mockFilterItems('status', 'pending').length).toEqual(1)
    })
    it('expect to filter items using search field', () => {
        filterAreaWrapper.find('[id="search-filter"]').simulate('change', {target: {value: 'item 1'}})
        expect(mockSetSearchField).toHaveBeenCalled()
        expect(mockFilterItems('value', 'item 1').length).toEqual(1)
    })
})