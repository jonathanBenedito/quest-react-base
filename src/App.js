import './App.css';
import { Button } from './components/button';
import { ColoredText } from './components/colored-text';

function App() {
  return (
    <>
      <ColoredText backgroundColor='antiqueWhite'>olá galera do dev em dobro!</ColoredText>
      <Button label="Baixar CV" />
    </>
  );
}

export default App;
