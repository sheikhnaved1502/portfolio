import React, { children } from "react";

import Header from "./Header";
import Footer from "./Footer";
function Layout({ children }) {
  return (
    <>
      <div className="container">
        <Header />
        <main style={{ minHeight: "80vh" }} className="center">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
