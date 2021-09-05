import Header from './components/Header';
import Main from './components/Main';
import {BrowserRouter} from 'react-router-dom'
import './reset.css'

function App() {

  //const isCpfValid = (cpf) => /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}-?[0-9]{2})$/.test(cpf)

  return (
    <>
      <Header />
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </>
  );
}

export default App;
