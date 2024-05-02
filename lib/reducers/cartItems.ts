import { createSlice } from "@reduxjs/toolkit";
import Product from "@/interfaces/IProduct";

interface CartItemsState {
    products: Product[]
    qty: { productId: number, qty: number }[]
}


const cartItemsSlice = createSlice({
    name: 'cartItems',
    initialState: { products: [], qty: [] } as CartItemsState,
    reducers: {
        addToCart: (state: CartItemsState, action) => {
            const { id } = action.payload;
            const product = state.products.find(product => product.id === id);
            if (product) {
                state.qty = state.qty.map(item => {
                    if (item.productId === id) {
                        item.qty++;
                    }
                    return item;
                })
            } else {
                state.products.push(action.payload);
                state.qty.push({ productId: id, qty: 1 });
            }

        },
        removeOneFromCart: (state: CartItemsState, action) => {
            const { id } = action.payload;
            const product = state.products.find(product => product.id === id);
            if (product) {
                state.qty = state.qty.map(item => {
                    if (item.productId === id) {
                        if (item.qty > 1)
                            item.qty--;
                    }
                    return item;
                })
            }
        },
        removeFromCart: (state: CartItemsState, action) => {
            const { id } = action.payload;
            const productIndex = state.products.findIndex(product => product.id === id);
            if (productIndex !== -1) {
                state.products.splice(productIndex, 1);
                state.qty = state.qty.filter(item => item.productId !== id);
            }
        },
        clearCart: (state: CartItemsState) => {
            state.products = [];
            state.qty = [];
        }
    }
})

export const { addToCart, removeOneFromCart, removeFromCart, clearCart } = cartItemsSlice.actions;
export default cartItemsSlice.reducer;