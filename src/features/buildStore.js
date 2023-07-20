import { createSlice } from '@reduxjs/toolkit';

export const buildSlice = createSlice({
    name: 'build',
    initialState: {
        value: []
    },
    reducers: {
        pushBuild: (state, action) => {
            return {
                ...state,
                value: [...state.value].concat(action.payload)
            }
        }
    }
})

export const { pushBuild } = buildSlice.actions
export default buildSlice.reducer