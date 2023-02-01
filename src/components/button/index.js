export const Button = ({label}) => <button onClick={() => alert(`A label desse botão é ${label}`)}> Mostrar mensagem por alerta </button>

Button.defaultProps = {
    label: '<insira a label aqui via JS>'
}