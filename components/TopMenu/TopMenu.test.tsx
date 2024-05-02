import { render, screen } from '@testing-library/react';
import TopMenu from '.';
import { Provider } from 'react-redux';
import cartItems, { addToCart, removeFromCart } from '@/lib/reducers/cartItems';
import { configureStore } from '@reduxjs/toolkit';
import cartMenu from '@/lib/reducers/cartMenu';

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

test('verifies Logo in TopMenu', () => {
    render(<Provider store={store}>
            <TopMenu />
        </Provider>
    );
    const firstName = screen.getByText('MKS');
    expect(firstName).toMatchSnapshot();
});

test('add a product to cart, and verifies if cart value is 1', () => {
    const product = { id: 1, name: 'Product', brand: 'brand', description: 'Description', price: '10', photo: 'photo', updatedAt: '2021-09-01' };
    store.dispatch(addToCart(product))
    render(
        <Provider store={store}>
            <TopMenu />
        </Provider>
    );
    expect(screen.getByText('1')).toMatchSnapshot();
});

test('remove a product and verifies if Cart values equals 0', () => {
    const product = { id: 1, name: 'Product', brand: 'brand', description: 'Description', price: '10', photo: 'photo', updatedAt: '2021-09-01' };
    store.dispatch(removeFromCart(product))

    render(
        <Provider store={store}>
            <TopMenu />
        </Provider>
    );
    const cart = screen.getByText('0');
    expect(cart).toMatchSnapshot();
}
);