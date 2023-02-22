import {IconProp} from "@fortawesome/fontawesome-svg-core";

export interface ICard {
    title: string
    id: string
    icon: IconProp
    link: string
}

export interface IList {
    state: Array<ICard>
    setState: Function
    id: string
}

export interface ILists {
    list1: IList
    list2: IList
}