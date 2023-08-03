const ProductReducer = (state: any, action: any) => {
    if (action.type === "SET_LOADING") {
        return {
            ...state,
            isLoading: true
        }
    }
    if (action.type === "API_ERROR") {
        return {
            ...state,
            isLoading: false,
            isError: true
        }
    }
    if (action.type === "SET_API_DATA") {
        const featureData = action.payload.filter((each: any) => {
            return each.featured === true

        })


        return {
            ...state,
            isLoading: false,
            products: action.payload,
            featureProducts: featureData,
        }
    }
    return state

}
export default ProductReducer