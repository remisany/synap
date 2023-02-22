import React, {Fragment} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

interface ICard {
    title: string
    icon: IconProp
}

const Card: React.FC<ICard> = ({title, icon}) => {
    return (
        <Fragment>
            <div className="c-title">{title}</div>
            <div className="c-icon-container"><FontAwesomeIcon className="c-icon" icon={icon}/></div>
        </Fragment>
    )
}

export default Card;