import {createContext} from 'react';
import { FilterType } from '../utils/types';

type ItemsContextType = {
    filterType: FilterType
    searchField: string
}

const ItemsContext = createContext<ItemsContextType | null>(null);

const ItemsProvider = ItemsContext.Provider;

export {ItemsProvider, ItemsContext}