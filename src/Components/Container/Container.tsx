import { useState } from 'react';
import AddItems from '../AddItems/AddItems';
import FilterArea from '../FilterArea/FilterArea';
import { FilterType, Items } from '../../utils/types'
import ShowDate from '../ShowDate/ShowDate';
import Progress from '../Progress/Progress'
import { ItemsProvider } from '../../context/Context'
import { ToastContainer } from 'react-toastify';

import { ContainerWrapper } from './Container.styles';


type SearchField = string

const Container = () => {

    const [items, setItems] = useState([] as Items[])
    const [filterType, setFilterType] = useState<FilterType>('')
    const [searchField, setSearchField] = useState<SearchField>('')


    const filteredItems = () => (items.filter(item => item.status.includes(filterType) && item.value.includes(searchField)))

    return (
        <ContainerWrapper>
            <ItemsProvider value={{
                filterType: filterType,
                searchField: searchField
            }}>
                <ShowDate />
                <Progress items={items} />
                <ToastContainer position="top-right" pauseOnHover />
                <FilterArea searchField={searchField} setSearchField={setSearchField} filterType={filterType} setFilterType={setFilterType} />
                <AddItems items={filteredItems()} oldItems={items} setItems={setItems} filterType={filterType} setFilterType={setFilterType}
                    searchField={searchField} setSearchField={setSearchField} />
            </ItemsProvider>
        </ContainerWrapper>
    );
};

export default Container;