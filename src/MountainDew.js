import { Link } from "react-router-dom";

import "./MountainDew.css";

const MountainDew = () => {
    return (
        <div className="MountainDew">
            <div className="MountainDew-img-container">
                <img className="MountainDew-img" src="https://i5.walmartimages.com/asr/f1042f35-97c0-4688-bbb2-a6e5fb938a46.4988c681fbc3ebfe0f7e5b5ab60f6c99.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF" />
            </div>
            <Link className="back" to="/">Choose another snack</Link>          
        </div>
    )
}

export default MountainDew;