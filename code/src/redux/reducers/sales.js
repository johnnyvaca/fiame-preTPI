import {ADD_SALES} from "../actions/actionsTypes";
const initialState = {
    list: [],
   // selectedSale: {}
}

export const sales = (state = initialState, action) => {
    switch (action.type){
        case ADD_SALES:
            return {
           //     selectedSale: state.selectedSale
                list: [...state.list, ...action.payload.data]
            }
        default:
            return state
    }
}
