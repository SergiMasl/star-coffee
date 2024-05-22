import "./main.sass";
import Header from "./_components/header/Header";
import Menu from "./_components/main/menu/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./_components/main/home/Home";

function App() {
  return (
    <div className="root">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/star-coffee" element={<Home />}></Route>
          <Route path="/star-coffee/menu" element={<Menu />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
