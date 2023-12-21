import React from "react";
import img from "../images/cycleZomatop.png";
import Layout from "./Layout";
import pic4 from "../pics/pic4.jpg";
import pic5 from "../pics/pic5.jpg";
import pic6 from "../pics/pic6.jpg";
function Adapting() {
  return (
    <Layout>
      <div className="text-center mt-3">
        <div className="text-center cycle">
          <img
            src={pic4}
            alt=""
            style={{
              height: "600px",
              width: "567",
              cursor: "pointer",
            }}
          />
          <p>
            Sculpting Societal Silhouettes <br /> Oil on Canvas <br /> 18X24
            inches
          </p>
        </div>
        <div className="text-center cycle">
          <img
            src={pic5}
            alt=""
            style={{ height: "600px", width: "567", cursor: "pointer" }}
          />
          <p>
            Shades of prejudice <br /> Oil on Canvas <br /> 18X24 inches
          </p>
        </div>
        <div className="text-center cycle">
          <img
            src={pic6}
            alt=""
            style={{ height: "600px", width: "567", cursor: "pointer" }}
          />
          <p>
            Lost in the Filter <br /> Oil on Canvas <br /> 12X17 inches
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Adapting;
