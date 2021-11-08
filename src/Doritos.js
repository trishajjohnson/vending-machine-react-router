import { Link } from "react-router-dom";

import "./Doritos.css";

const Doritos = () => {
    return (
        <div className="Doritos">
            <div className="Doritos-img-container">
                <img className="Doritos-img" src="https://d2d8wwwkmhfcva.cloudfront.net/932x932/filters:fill(FFF,true):format(webp)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_5f012614-8ee5-4f18-8f7e-37cb3ffa9b2f.png" />
            </div>
            <Link className="back" to="/">Choose another snack</Link>
        </div>
    )
}

export default Doritos;