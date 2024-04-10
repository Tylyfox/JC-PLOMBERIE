import "./App.scss";
import {Contact, Services, Header} from "./pages/index";
import {Navbar, Footer} from "./components/index";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
