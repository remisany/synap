import {request} from "./request";

export const libraryServices = {
    search
}

function search(keyword: string) {
    console.log(`${process.env.REACT_APP_API_HOST}/books/search`)
    return request(
        'POST',
        `${process.env.REACT_APP_API_HOST}/books/search`,
        (response: any) => response,
        null,
        null,
        {keyword: keyword}
    )
}