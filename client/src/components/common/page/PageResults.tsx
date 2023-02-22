import React from "react";

//import components
import PageCard from "./PageCard";
import Loading from "../Loading";

interface IPageResults {
    results: Array<any>,
    loading: boolean
}

const PageResults: React.FC<IPageResults> = ({results, loading}) => {
    return (
        <div className="pr-container">
            {!loading ?
                results.map((result, index) => (
                    <PageCard key={index} image={result.image} title={result.title} author={result.author}/>
                ))
                :
                <Loading/>
            }
        </div>
    )
}

export default PageResults