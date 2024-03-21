import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./routes";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="App-header">
      <BrowserRouter>
        <Header />
        <RoutesApp />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
