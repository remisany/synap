import React, {Fragment, useState} from "react";

//import components
import PageHeader from "../common/page/PageHeader";
import PageResults from "../common/page/PageResults";
import NoResults from "../common/NoResults";

//import interfaces
import {FieldValues} from "react-hook-form/dist/types/fields";

//import services
import {libraryServices} from "../../services/libraryServices";

const Library: React.FC = () => {
    const [loading, setLoading] = useState(false)
    const [results, setResults] = useState([])

    const searchBooks = (values: FieldValues) => {
        setLoading(true)
        const keyword = values.search.replace(" ", "+")
        libraryServices.search(keyword).then(response => {
            setResults(response.data)
            setLoading(false)
        })
    }

    return (
        <Fragment>
            <PageHeader
                placeholder="Rechercher  un livre, un auteur, ..."
                onSubmit={searchBooks}
            />

            <PageResults results={results} loading={loading}/>

            {!loading && !results.length && <NoResults/>}
        </Fragment>
    )
}

export default Library