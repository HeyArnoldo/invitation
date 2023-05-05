import './App.css';
import { useEffect } from 'react';
import Header from './components/Header';
import {SaveTheDate} from './components/SaveTheDate';
import {Photos} from './components/Photos';
import {Place} from './components/Place';
import {Routine} from './components/Routine';
import {Clothes} from './components/Clothes';
import {Form} from './components/Form';
import {Footer} from './components/Footer';

function App() {
  useEffect(() => {
    document.title = 'Boda de Karla y Samuel | Invitación';
  }, []);
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <Header />
      <SaveTheDate />
      <Photos />
      <Place />
      <Routine />
      <Clothes />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
