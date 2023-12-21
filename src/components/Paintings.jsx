import React from "react";
import Layout from "./Layout";
import Cards from "./Cards";
import { arr } from "../assets/imageAsset";
function Paintings() {
  return (
    <Layout>
      <h2 style={{ textAlign: "center" }}>Art Collections</h2>
      <Cards />
    </Layout>
  );
}

export default Paintings;
