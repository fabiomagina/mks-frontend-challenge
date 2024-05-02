import { render } from "@testing-library/react";
import '@testing-library/jest-dom'
import Footer from ".";

test('verifies if footer text is showing', () => {
    const { getByText } = render(<Footer/>);
    const footerText = getByText('MKS sistemas © Todos os direitos reservados');
    expect(footerText).toBeInTheDocument();
});
