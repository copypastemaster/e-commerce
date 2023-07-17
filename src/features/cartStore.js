import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: []
    },
    reducers: {
        pushItems: (state, action) => {
            return {
                ...state, 
                value: [...state.value].concat(action.payload)
            }
        }
    }
})

export const { pushItems } = cartSlice.actions
export default cartSlice.reducer