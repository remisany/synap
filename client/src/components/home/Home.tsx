import React, {useState} from "react";
import {DragDropContext, DropResult} from 'react-beautiful-dnd';
import {isMobile} from 'react-device-detect';

//import components
import ListCard from "./ListCard";

//import constants
import {cardConstants} from "../../constants/cardConstants";

//import interfaces
import {ICard, ILists} from "../../interfaces/cardInterfaces";

const Home: React.FC = () => {
    const [cardList1, updateCardList1] = useState<Array<ICard>>(isMobile ? cardConstants.cardConstant() : cardConstants.cardConstant().slice(0,2));
    const [cardList2, updateCardList2] = useState<Array<ICard>>(isMobile ? [] : cardConstants.cardConstant().slice(2,4));

    const lists: ILists = {
        list1: {state: cardList1, setState: updateCardList1, id: "list1"},
        list2: {state: cardList2, setState: updateCardList2, id: "list2"},
    }

    const onDragEnd = (result: DropResult): void => {
        const {source, destination} = result;

        if (!destination) return

        if (source.droppableId === destination.droppableId) {
            const items = cardConstants.reorder(
                lists[source.droppableId as keyof ILists].state,
                source.index,
                destination.index
            )

            lists[source.droppableId as keyof ILists].setState(items)
        } else {
            const result = cardConstants.move(
                lists[source.droppableId as keyof ILists].state,
                lists[destination.droppableId as keyof ILists].state,
                source,
                destination
            )

            updateCardList1(result.list1)
            updateCardList2(result.list2)
        }
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="h-container">
                <ListCard list={lists.list1}/>
                <ListCard list={lists.list2}/>
            </div>
        </DragDropContext>
    )
}

export default Home;