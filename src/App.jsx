import { useState } from "react";

import "./App.css";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Paintings from "./components/Paintings";
import UnseenHand from "./components/UnseenHand";
import Adapting from "./components/Adapting";
import Savouring from "./components/Savouring";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<About />} />
        {/* <Route path="/painting" element={<Paintings />} /> */}
        <Route path="/unseenHand" element={<UnseenHand />} />
        <Route path="/adaptingtobelong" element={<Adapting />} />
        <Route path="/savouringserendipity" element={<Savouring />} />
      </Routes>
    </>
  );
}

export default App;
