import { render, screen } from '@testing-library/react';
import { ColoredText } from '.';

it('Paragraph text must be in uppercase and have a colored background', () => {
    render(<ColoredText backgroundColor='red'>parabéns</ColoredText>)
    expect(screen.getByText('PARABÉNS')).toHaveStyle('background-color: red;')
});

it('Change background color by name', () => {
    render(<ColoredText backgroundColor='red'>ola</ColoredText>)
    expect(screen.getByText('OLA')).toHaveStyle('background-color: red;')
});

it('Change background color by hexadecimal', () => {
    render(<ColoredText backgroundColor='#FF5733'>boa noite!</ColoredText>)
    expect(screen.getByText('BOA NOITE!')).toHaveStyle('background-color: #FF5733;')
});
