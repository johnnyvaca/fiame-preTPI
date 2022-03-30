import {ADD_RECIPES} from "./actionsTypes"

export const addRecipes = (data) => ({
    type: ADD_RECIPES,
    payload: {
        data
    }
})