import { useFilterContext } from "../context/Filtercontext"
import GridView from "./GridView"
import ListView from "./ListView"

const ProductList: React.FC<any> = () => {

  const { filter_products, grid_view } = useFilterContext() as any

  if (grid_view) {
    return <GridView products={filter_products} />
  }
  if (!grid_view) {
    return <ListView products={filter_products} />
  }
}

export default ProductList