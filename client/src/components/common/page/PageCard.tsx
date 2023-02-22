import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface IPageCard {
    image: string,
    title: string,
    author: string
}

const PageCard: React.FC<IPageCard> = ({image, title}) => {
    return (
        <div className="pc-container">
            <div className="pc-img"><img alt={"couverture " + title} src={image}/></div>
            <div className="pc-text">
                <div className="pc-text-title">{title}</div>
                <div className="pc-text-icons">
                    <FontAwesomeIcon className="pc-icon" icon="user"/>
                    <FontAwesomeIcon className="pc-icon" icon="user-group"/>
                </div>
            </div>
        </div>
    )
}

export default PageCard