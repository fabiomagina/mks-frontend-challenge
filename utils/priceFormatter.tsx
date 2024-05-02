const priceFormatter = (price: string) => {
    const priceValue = Math.ceil(parseFloat(price));
    let priceString = "R$" + priceValue.toLocaleString("pt-BR");
    return priceString;
}

export default priceFormatter