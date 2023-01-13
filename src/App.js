import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Importing Components
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
