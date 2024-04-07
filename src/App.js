import './App.scss';
import Navbar from './components/navbar/Navbar';
import Header from './pages/header/Header';
import Services from './pages/services/Services';
import Contact from './pages/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <main className='app__container'>
        <Header />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
