import TanstackProvider from "@/providers/TanstackProvider";
import ProductGrid from ".";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom'

test('verifies if ProductGrid is showing skeleton on first moment', () => {
    render(<TanstackProvider><ProductGrid /></TanstackProvider>);
    const skeleton = document.querySelector('.product__container__skeleton')
    expect(skeleton).toBeInTheDocument();
});

