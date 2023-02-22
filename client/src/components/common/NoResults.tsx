import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const NoResults: React.FC = () => {
    return (
        <div className="nr-container">
            <FontAwesomeIcon className="nr-icon" icon="face-grimace"/>
            <div>Aucun résultat...</div>
        </div>
    )
}

export default NoResults