import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useForm} from 'react-hook-form';

interface IIconsHeader {
    placeholder: string,
    onSubmit: Function
}

const PageHeader: React.FC<IIconsHeader> = ({placeholder, onSubmit}) => {
    const {handleSubmit, register} = useForm();

    return (
        <div className="ih-container">
            <div className="ih-container-icons">
                <FontAwesomeIcon className="ih-icon" icon="magnifying-glass"/>
                <FontAwesomeIcon className="ih-icon" icon="user"/>
                <FontAwesomeIcon className="ih-icon" icon="user-group"/>
            </div>

            <div className="ih-container-search">
                <form onSubmit={handleSubmit(values => onSubmit(values))}>
                    <input {...register("search")} className="ih-search" type="search" placeholder={placeholder}/>
                </form>
            </div>
        </div>
    )
}

export default PageHeader