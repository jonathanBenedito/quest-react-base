import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '.';

it("Show DEFAULT message alert when label property is empty", () => {
    const alertMock = jest.spyOn(window,'alert').mockImplementation();
    
    render(<Button/>)

    userEvent.click(screen.getByRole('button'))
    expect(alertMock).toBeCalledTimes(1)
    expect(alertMock).toHaveBeenCalledWith('A label desse botão é <insira a label aqui via JS>')
});

it("Show CUSTOM message alert", () => {
    const alertMock = jest.spyOn(window,'alert').mockImplementation();
    
    render(<Button label="Baixar CV" />)  

    userEvent.click(screen.getByRole('button'))
    expect(alertMock).toBeCalledTimes(1)
    expect(alertMock).toHaveBeenCalledWith('A label desse botão é Baixar CV')
});