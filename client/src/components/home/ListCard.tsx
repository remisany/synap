import React from "react";
import {Draggable} from "react-beautiful-dnd";
import {NavigateFunction, useNavigate} from "react-router-dom";

//import components
import Card from "./Card";
import StrictModeDroppable from "../common/StrictModeDroppable";

//import interfaces
import {IList} from "../../interfaces/cardInterfaces";

interface IListCard {
    list: IList
}

const ListCard: React.FC<IListCard> = ({list}) => {
    const navigate: NavigateFunction = useNavigate()

    return (
        <StrictModeDroppable droppableId={list.id}>
            {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef} className="ls-container">
                    {list.state.map((card, index) => (
                        <Draggable key={card.id} draggableId={card.id} index={index}>
                            {(provided) => (
                                <div className="h-card" onClick={() => navigate(card.link)} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                    <Card title={card.title} icon={card.icon}/>
                                </div>
                            )}
                        </Draggable>
                    ))}
                    {provided.placeholder}
                </div>
            )}
        </StrictModeDroppable>
    )
}

export default ListCard