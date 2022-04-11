import {ADD_SALES} from "./actionsTypes";

export const addSales = (data) => ({
    type: ADD_SALES,
    payload: {
        data
    }
})
