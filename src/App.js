import Header from './components/Header';
import Main from './components/Main';
import {BrowserRouter} from 'react-router-dom'
import './reset.css'

function App() {
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
