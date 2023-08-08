import { createContext, useContext, ReactNode, useEffect, useReducer } from 'react'
import { useProductContext } from './ProductContext'
import reducer from '../reducer/FilterReducer'
type AppProviderProps = {
    children: ReactNode
}
interface FilterInitialState {
    filter_products: any[],
    all_products: any[]
    grid_view: boolean
    sorting_value: string
}

const FilterContext = createContext<FilterInitialState | undefined>(undefined)
const initialState: any = {
    filter_products: [],
    all_products: [],
    grid_view: false,
    sorting_value: "lowest"
}


export const FilterContextProvider: React.FC<any> = ({ children }: AppProviderProps) => {
    const { products } = useProductContext() as any
    const [state, dispatch] = useReducer(reducer, initialState)
    // console.log({ ...state })
    const setGridView = (): any => {
        // console.log("set grid view");
        return dispatch({ type: "SET_GRID_VIEW" })
    }

    const setListView = (): any => {
        // console.log("from set list view");
        return dispatch({ type: "SET_LIST_VIEW" })
    }
    const sorting = (event: any) => {
        let userValue = event.target.value;
        // console.log(userValue); 
        dispatch({ type: "GET_SORT_VALUE", payload: userValue });
    };

    useEffect(() => {
        dispatch({ type: "SORTING_PRODUCTS" });
    }, [products, state.sorting_value]);

    useEffect(() => {
        dispatch({ type: 'LOAD_FILTER_PRODUCTS', payload: products })
    }, [products]);

    return (
        <FilterContext.Provider value={{ ...state, setGridView, setListView, sorting }}>
            {children}
        </FilterContext.Provider>
    )


}


export const useFilterContext = () => {
    return useContext(FilterContext)
}

