import "./App.scss";
import {Contact, Services, Header} from "./pages/index";
import {Navbar, Footer} from "./components/index";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Services />
      <Contact />
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
