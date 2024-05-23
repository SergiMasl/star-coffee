import "./main.sass";
import Header from "./_components/header/Header";
import Menu from "./_components/main/menu/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./_components/main/home/Home";
import SubMenu from "./_components/main/menu/SubMenu/SubMenu";
import _MenuWrapper from "./_components/main/menu/_MenuWrapper";

function App() {
  return (
    <div className="root">
      <div className="layout">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/star-coffee" element={<Home />}></Route>
            <Route path="/star-coffee/menu/*" element={<Menu />}>
              {/* <Route path="submenu:id" element={<SubMenu />} /> */}
              <Route path="submenu" element={<SubMenu />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
