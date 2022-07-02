import {shallow} from 'enzyme'
import { Items } from '../../utils/types'
import Progress from './Progress'

describe('Progress', () => {

    const mockItems:Items[] = [
        {value: 'item 1', status: 'done', itemIndex: 0},
        {value: 'item 2', status: 'pending', itemIndex: 1},
    ]

    const progressWrapper = shallow(<Progress items={mockItems}/>)

    it('expect to render Progress component', () => {
        expect(progressWrapper).toMatchSnapshot()
    })

    it('expect to progress bar percent be 50%', () => {
        const progressBar = progressWrapper.find('.progressBar')
        expect(progressBar.prop('percent')).toBe(50)
    })
})