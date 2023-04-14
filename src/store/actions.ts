import ApiStar from "../service/api";

import { GetStarAction, StarActions } from "../Types/store"

export const getPeople = async (): Promise<GetStarAction> => {
    const star = await ApiStar();
    return {
        action: StarActions.GET,
        payload: star
    }
}