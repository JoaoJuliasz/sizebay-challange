//Importing libs
import { Button } from 'antd'
import { CheckOutlined } from '@ant-design/icons';

//Importing styled-components
import { FilterAreaContainer, FilterButtonsContainer, SearchAreaContainer, SearchArea, FilterButton, SearchIcon } from './FilterArea.styles'

import { FilterType } from '../../utils/types'

type FilterAreaProps = {
    searchField: string
    setSearchField: (value: string) => void
    filterType: string
    setFilterType: (value: FilterType) => void
}

const FilterArea = ({ searchField, setSearchField, filterType, setFilterType }: FilterAreaProps) => {

    const handleClick = (value: FilterType) => {
        let newValue = filterType as FilterType
        if (value === filterType) {
            newValue = ''
            setFilterType(newValue)
        } else {
            newValue = value
            setFilterType(newValue)
        }
    }

    return (
        <FilterAreaContainer>
            <FilterButtonsContainer>
                <FilterButton id="done" onClick={() => handleClick('done')} selectedButton={'done' === filterType}
                    size="large" icon={'done' === filterType && <CheckOutlined />}>Done</FilterButton>
                <FilterButton id="pending" selectedButton={'pending' === filterType} icon={'pending' === filterType && <CheckOutlined />} onClick={() => handleClick('pending')} size="large">Pending</FilterButton>
            </FilterButtonsContainer>
            <SearchAreaContainer>
                <SearchArea id="search-filter" type="text" value={searchField} placeholder="Search items"
                    onChange={e => setSearchField(e.target.value)} />
                <SearchIcon />
            </SearchAreaContainer>
        </FilterAreaContainer>
    );
};

export default FilterArea;