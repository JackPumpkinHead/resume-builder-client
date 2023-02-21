import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return(
        <div>
            <h3>
                You`ve not provided your detailes.
                Kindly head back to the{" "}
                <Link to='/'>homepage</Link>.
            </h3>
        </div>
    );
};

export default ErrorPage;