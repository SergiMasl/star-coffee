import "./main.sass";
import Header from "./_components/header/Header";
import Menu from "./_components/main/menu/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./_components/main/home/Home";
import SubMenu from "./_components/main/menu/SubMenu/SubMenu";
import _MenuWrapper from "./_components/main/menu/_MenuWrapper";
import Drinks from "./_components/main/menu/drinks/Drinks";

function App() {
  // const firebaseConfig = {
  //   apiKey: "AIzaSyCASxGe2OiqnDDv2jvvNasBZz-cMjr8nkM",
  //   authDomain: "star-coffee-80179.firebaseapp.com",
  //   projectId: "star-coffee-80179",
  //   storageBucket: "star-coffee-80179.appspot.com",
  //   messagingSenderId: "600274991997",
  //   appId: "1:600274991997:web:38bfd871a9c7c736e9ea14",
  //   measurementId: "G-G39MSN0179",
  // };

  // // Initialize Firebase
  // const app = initializeApp(firebaseConfig);
  // const storage = getStorage();
  // console.log(storage);

  return (
    <div className="root">
      <div className="layout">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/star-coffee" element={<Home />}></Route>
            <Route path="/star-coffee/menu/*" element={<Menu />} />
            <Route path="/star-coffee/product/:id" element={<Drinks />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
