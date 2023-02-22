import React from "react";

import {HashLoader} from "react-spinners";

const Loading: React.FC = () => {
    return (
        <div className="loading" >
            <HashLoader color="#ff5200"/>
        </div>
    )
}

export default Loading;