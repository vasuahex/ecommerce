import axios from 'axios'
import { ReactNode, createContext, useContext, useEffect, useReducer } from 'react'
import reducer from '../reducer/ProductReducer'
type AppProviderProps = {
    children: ReactNode
}
export interface Product {
    category: string;
    colors: string[];
    company: string;
    description: string;
    featured: boolean;
    id: string;
    image: string;
    name: string;
    price: number;
    shipping: boolean;
}
export interface InitialState {
    isLoading: boolean,
    isError: boolean,
    products: any,
    featureProducts: Product[],

}

export const AppContext = createContext<InitialState | undefined>(undefined)
const API = "https://api.pujakaitem.com/api/products"


const initialState: InitialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: []
}

export const AppProvider = ({ children }: AppProviderProps) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const getProducts = async (url: string) => {
        dispatch({ type: "SET_LOADING" })
        try {
            const res = await axios.get(url);
            const products = await res.data
            dispatch({ type: "SET_API_DATA", payload: products })
        } catch (error) {
            dispatch({ type: "API_ERROR" })
        }
    }
    useEffect(() => {
        getProducts(API)
    }, [])

    return (
        <AppContext.Provider value={{ ...state }}>
            {children}
        </AppContext.Provider>)
}



export const useProductContext = () => {
    return useContext(AppContext)
}
