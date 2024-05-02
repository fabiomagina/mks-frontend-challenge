import IProduct from '@/interfaces/IProduct'

interface getProductsProps {
    pages?: number;
    rows?: number;
    sortBy?: 'id' | 'name' | 'price';
    orderBy?: 'ASC' | 'DESC';
}

const getProducts = async ({ page = 1, rows = 10, sortBy = 'id', orderBy = 'DESC' }) => {
    const data = await fetch(`https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=${page}&rows=${rows}&sortBy=${sortBy}&orderBy=${orderBy}`)

    const response = await data.json()
    const products: IProduct[] = response.products
    return products
};

export default getProducts;