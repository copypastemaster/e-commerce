import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        value: {name: '', image: '', price: 0, description: '', prevPrice: 0, badge: ''}
    },
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        }
    }
})

export const {login} = productSlice.actions
export default productSlice.reducer
