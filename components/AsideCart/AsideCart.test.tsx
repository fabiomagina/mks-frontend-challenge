import { render, screen } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import cartItems, { addToCart, clearCart, removeFromCart } from "@/lib/reducers/cartItems";
import cartMenu from "@/lib/reducers/cartMenu";
import { Provider } from "react-redux";
import '@testing-library/jest-dom'
import AsideCart from ".";

const mockStore = configureStore({
    reducer: {
        cartItems,
        cartMenu
    }
});
let store: any;

beforeAll(() => {
    store = mockStore;
});

test('test if a product can be added to cart', () => {
    const product = { id: 1, name: 'Product', brand: 'brand', description: 'Description', price: '10', photo: '', updatedAt: '2021-09-01' };
    store.dispatch(addToCart(product))
    render(<Provider store={store}><AsideCart/></Provider>);
    const title = screen.getByText('Product');
    const qty = screen.getByText('1');
    expect(title).toBeInTheDocument();
    expect(qty).toBeInTheDocument();
});

test('Test if product can be removed from cart', () => {
    const product = { id: 1, name: 'Product', brand: 'brand', description: 'Description', price: '10', photo: '', updatedAt: '2021-09-01' };
    store.dispatch(removeFromCart(product))
    render(<Provider store={store}><AsideCart/></Provider>);
    const title = screen.queryByText('Product');
    expect(title).not.toBeInTheDocument();
});

test('test if multiple items can be added to cart', () => {
    const product1 = { id: 1, name: 'Product1', brand: 'brand', description: 'Description', price: '10', photo: '', updatedAt: '2021-09-01' };
    const product2 = { id: 2, name: 'Product2', brand: 'brand', description: 'Description', price: '10', photo: '', updatedAt: '2021-09-01' };
    store.dispatch(addToCart(product1))
    store.dispatch(addToCart(product2))
    render(<Provider store={store}><AsideCart/></Provider>);
    const title1 = screen.queryByText('Product1');
    expect(title1).toBeInTheDocument();
    const title2 = screen.queryByText('Product2');
    expect(title2).toBeInTheDocument();
});

test('test total price calculation', () => {
    const product1 = { id: 1, name: 'Product1', brand: 'brand', description: 'Description', price: '10', photo: '', updatedAt: '2021-09-01' };
    const product2 = { id: 2, name: 'Product2', brand: 'brand', description: 'Description', price: '20', photo: '', updatedAt: '2021-09-01' };
    store.dispatch(clearCart())
    store.dispatch(addToCart(product1))
    store.dispatch(addToCart(product2))
    render(<Provider store={store}><AsideCart/></Provider>);
    const total = screen.getByText('R$30');
    expect(total).toBeInTheDocument();
});