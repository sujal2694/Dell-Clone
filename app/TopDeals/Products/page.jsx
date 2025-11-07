import FilterBar from "./FilterBar/page"
import Items from "./Items/page"


const Products = ({}) => {
  return <div className="flex items-start">
    <FilterBar/>
    <Items/>
  </div>
}

export default Products