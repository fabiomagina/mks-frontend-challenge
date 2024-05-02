import { render, screen } from "@testing-library/react";
import ProductCard from ".";
import { configureStore } from "@reduxjs/toolkit";
import cartItems, { addToCart, removeOneFromCart } from "@/lib/reducers/cartItems";
import cartMenu from "@/lib/reducers/cartMenu";
import { Provider } from "react-redux";
import '@testing-library/jest-dom'

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

test('Test if product card is showing right title and price', () => {
    const product = { id: 1, name: 'Product', brand: 'brand', description: 'Description', price: '10', photo: '', updatedAt: '2021-09-01' };
    store.dispatch(addToCart(product))
    render(<Provider store={store}><ProductCard product={product} /></Provider>);
    const title = screen.getByText('Product');
    const price = screen.getByText('R$10');
    expect(title).toBeInTheDocument();
    expect(price).toBeInTheDocument();
});

test('Test if product is qty is being updated if same item added again', () => {
    const product = { id: 1, name: 'Product', brand: 'brand', description: 'Description', price: '10', photo: '', updatedAt: '2021-09-01' };
    store.dispatch(addToCart(product))
    render(<Provider store={store}><ProductCard product={product} /></Provider>);
    const qty = screen.getByText('2');
    expect(qty).toBeInTheDocument();
});

test('Test if product qty can be decreased', () => {
    const product = { id: 1, name: 'Product', brand: 'brand', description: 'Description', price: '10', photo: '', updatedAt: '2021-09-01' };
    store.dispatch(removeOneFromCart(product))
    render(<Provider store={store}><ProductCard product={product} /></Provider>);
    const qty = screen.getByText('1');
    expect(qty).toBeInTheDocument();
});

test('Test if product qty cant be decreased to <= 0', () => {
    const product = { id: 1, name: 'Product', brand: 'brand', description: 'Description', price: '10', photo: '', updatedAt: '2021-09-01' };
    store.dispatch(removeOneFromCart(product))
    store.dispatch(removeOneFromCart(product))
    store.dispatch(removeOneFromCart(product))
    render(<Provider store={store}><ProductCard product={product} /></Provider>);
    const qty = screen.getByText('1');
    expect(qty).toBeInTheDocument();
});


