import { NavLink } from "react-router-dom"
import FormalPrice from "../Helpers/FormalPrice"

const Product = (curEle:any) => {
    const { id, name, image, price, category } = curEle
    return (
        <NavLink to={`/singleproduct/${id}`}>
            <div className="card">
                <figure>
                    <img src={image} alt={name} />
                    <figcaption className="caption">{category}</figcaption>
                </figure>
                <div className="card-data">
                    <div className="card-data-flex">
                        <h3>{name}</h3>
                        <p className="card-data--price">{<FormalPrice price={price}/>}</p>
                    </div>
                </div>
            </div>
        </NavLink>
    )
}

export default Product