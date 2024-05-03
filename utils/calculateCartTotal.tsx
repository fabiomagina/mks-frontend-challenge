import { useAppSelector } from "@/lib/hooks";
import priceFormatter from "./priceFormatter";

const calculateCartTotal = () => {
    const cartItems = useAppSelector(state => state.cartItems);
    const total = cartItems.qty.reduce((acc, product) => {
        const productPrice = cartItems.products.find(item => item.id === product.productId)?.price;
        const totalPrice = productPrice ? parseFloat(productPrice) * product.qty : 0;
        return acc + totalPrice;
    }, 0);
    return priceFormatter(`${total}`)
}

export default calculateCartTotal;