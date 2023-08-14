const FilterReducer = (state: any, action: any) => {

    switch (action.type) {

        case 'LOAD_FILTER_PRODUCTS':
            // Handle the action logic and update the state
            let priceArray = action.payload.map((curElem: any) => curElem.price)
            let maxNum = Math.max(...priceArray)



            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
                filters: { ...state.filters, maxPrice: maxNum, price: maxNum }
            };
        case 'SET_GRID_VIEW':
            return {
                ...state,
                grid_view: true
            }
        case 'SET_LIST_VIEW':
            return {
                ...state,
                grid_view: false
            }
        case 'GET_SORT_VALUE':

            return {
                ...state,
                sorting_value: action.payload
            }
        case 'SORTING_PRODUCTS':
            let newSortData;

            const { filter_products, sorting_value } = state;
            let tempSortProduct = [...filter_products];

            const sortingProducts = (a: any, b: any) => {
                if (sorting_value === "lowest") {
                    return a.price - b.price;
                }

                if (sorting_value === "highest") {
                    return b.price - a.price;
                }

                if (sorting_value === "a-z") {
                    return a.name.localeCompare(b.name);
                }

                if (sorting_value === "z-a") {
                    return b.name.localeCompare(a.name);
                }
            };

            newSortData = tempSortProduct.sort(sortingProducts);
            return {
                ...state,
                filter_products: newSortData
            }

        case 'UPDATE_FILTER-VALUE':
            const { name, value } = action.payload;

            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value,
                },
            };

        case "FILTER_PRODUCTS":
            let { all_products } = state
            // console.log(all_products);

            let tempFilterProduct = [...all_products]
            const { text, category, company, color, price } = state.filters
            // console.log(category);


            if (text) {
                tempFilterProduct = tempFilterProduct.filter((each: any) => {
                    return each.name.toLowerCase().includes(text)
                })
            }
            if (category !== "all") {
                tempFilterProduct = tempFilterProduct.filter((each: any) => {
                    return each.category === category
                })
            }

            if (company !== "all") {
                tempFilterProduct = tempFilterProduct.filter((each: any) => {
                    return each.company.toLowerCase() === company.toLowerCase()
                })
            }

            if (color !== "all") {
                tempFilterProduct = tempFilterProduct.filter((each: any) => {
                    return each.colors.includes(color)
                })
            }
            if (price === 0) {
                tempFilterProduct = tempFilterProduct.filter(
                    (curElem) => curElem.price === price
                );
            } else {
                tempFilterProduct = tempFilterProduct.filter(
                    (curElem) => curElem.price <= price
                );
            }
            return {
                ...state,
                filter_products: tempFilterProduct
            }

        case "CLEAR_FILTERS":
            return {
                ...state,
                filters: {
                    ...state.filters,
                    text: "",
                    category: "all",
                    company: "all",
                    color: "all",
                    maxPrice: state.filters.minPrice,
                    price: state.filters.maxPrice,
                    minPrice: state.filters.maxPrice,
                },
            };

        default:
            return state;
    }

}
export default FilterReducer