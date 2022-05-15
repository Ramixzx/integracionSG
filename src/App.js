import Form from './components/Form';
import Header from './components/Header';
import Hero from './components/Hero';
import HowWorks from './components/HowWorks';
import FromHome from './components/FromHome';
import Remember from './components/Remember';
import PayToSave from './components/PayToSave';
import Packs from './components/Packs';
import Table from './components/Table'
import Questions from './components/Questions'
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css'

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
        <Packs />
        <Table />
        <Questions />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
