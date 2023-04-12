import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('should page', () => {
    render(<App />);
    const headerElement = screen.getByRole('heading', {
        name: /vite \+ react/i,
    });
    expect(headerElement).toBeInTheDocument();
});
