import { createSlice } from "@reduxjs/toolkit";

const cartMenuSlice = createSlice({
    name: 'cartMenu',
    initialState: false,
    reducers: {
        toggleCartMenu: state => !state
    }
})
export const { toggleCartMenu } = cartMenuSlice.actions

export default cartMenuSlice.reducer;