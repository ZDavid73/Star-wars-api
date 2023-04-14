import {starWar} from "./data"
export type Observer = ({ render: () => void } & HTMLElement);

export type AppState = {
    people: starWar[]
}

export enum StarActions {
    "GET" = "GET",
}

export interface GetStarAction {
    action: StarActions.GET,
    payload: starWar[]
}

export type Actions = GetStarAction;