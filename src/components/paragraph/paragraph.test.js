import { render, screen } from '@testing-library/react';
import Paragraph from './paragraph'

it('Paragraph text must be in uppercase and have a colored background', () => {
    render(<Paragraph backgroundColor='red' text="parabéns" />)
    expect(screen.getByText('parabéns')).toHaveStyle('background-color: red; text-transform: uppercase;')
});

it('Change background color by name', () => {
    render(<Paragraph backgroundColor='red' text="ola" />)
    expect(screen.getByText('ola')).toHaveStyle('background-color: red; text-transform: uppercase;')
});

it('Change background color by hexadecimal', () => {
    render(<Paragraph backgroundColor='#FF5733' text="boa noite!" />)
    expect(screen.getByText('boa noite!')).toHaveStyle('background-color: #FF5733; text-transform: uppercase;')
});
