import { Link } from "react-router-dom";

import "./Snickers.css";

const Snickers = () => {
    return (
        <div className="Snickers">
            <div className="Snickers-img-container">
                <img className="Snickers-img" src="https://i.ebayimg.com/images/g/RHkAAOSwdEZgxkh0/s-l1600.jpg" alt="snack" />
            </div>
            <Link className="back" to="/">Choose another snack</Link>
        </div>
    )
}

export default Snickers;