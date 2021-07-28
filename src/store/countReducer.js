import { createSlice } from '@reduxjs/toolkit'

export const countSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 501,
    },
    reducers: {
        incrementByAmount: (state, action) => {
            state.value -= action.payload
        }
    },
})

export const { incrementByAmount } = countSlice.actions

export default countSlice.reducer