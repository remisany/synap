import {DraggableLocation} from "react-beautiful-dnd";

//import interfaces
import {ICard} from "../interfaces/cardInterfaces";

export const cardConstants = {
    cardConstant,
    move,
    reorder,
}

function cardConstant (): Array<ICard> {
    return [
        {title: "Cinéma", id: "movie", icon: "film", link: "/cinema"},
        {title: "Météo", id: "weather", icon: "temperature-half", link: "/meteo"},
        {title: "Bibliothèque", id: "library", icon: "book", link: "/bibliotheque"},
        {title: "Courses", id: "shopping", icon: "cart-shopping", link: "/courses"},
    ]
}

function move (source: Array<ICard>, destination: Array<ICard>, droppableSource: DraggableLocation, droppableDestination: DraggableLocation) {
    const newSource: Array<ICard> = [...source]
    const newDestination: Array<ICard> = [...destination]
    const [removed]: Array<ICard> = newSource.splice(droppableSource.index, 1)
    newDestination.splice(droppableDestination.index, 0, removed)

    const lastCard: Array<ICard> = newDestination.splice(newDestination.length - 1, 1)

    return {
        [droppableSource.droppableId]: [...newSource, ...lastCard],
        [droppableDestination.droppableId]: newDestination
    }
}

function reorder (list: Array<ICard>, startIndex: number, endIndex: number): Array<ICard> {
    const result: Array<ICard> = [...list]
    const [removed]: Array<ICard> = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)

    return result
}