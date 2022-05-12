import Form from './components/Form';
import Header from './components/Header';
import Hero from './components/Hero';
import HowWorks from './components/HowWorks';
import FromHome from './components/FromHome';
import Remember from './components/Remember';
import './App.css'
import PayToSave from './components/PayToSave';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <div className='sections-container'>
        <Form />
        <HowWorks /> 
        <FromHome />
        <Remember />
        <PayToSave />
      </div>
    </div>
  );
}

export default App;
