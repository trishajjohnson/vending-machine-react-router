import React from "react";
import { Link } from "react-router-dom";

import "./VendingMachine.css";

const VendingMachine = () => {
    return (
        <div className="VendingMachine">
            <div className="VendingMachine-container">
                <p><Link className="VendingMachine-link" to="/mtndew">Mountain Dew</Link></p>
                <p><Link className="VendingMachine-link" to="/snickers">Snickers</Link></p>
                <p><Link className="VendingMachine-link" to="/doritos">Doritos</Link></p>
            </div>
        </div>
    )
}

export default VendingMachine;