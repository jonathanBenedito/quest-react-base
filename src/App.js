import './App.css';
import Button from './components/button/button';
import Paragraph from './components/paragraph/paragraph';

function App() {
  return (
    <>
      <Paragraph backgroundColor='antiqueWhite' text='olá galera do dev em dobro!'/>
      <Button label="Baixar CV" />
    </>
  );
}

export default App;
