import React from "react";
import img from "../images/cycleZomatop.png";
import pic1 from "../pics/pic1.jpg";
import pic2 from "../pics/pic2.jpg";
import pic3 from "../pics/pic3.jpg";
import Layout from "./Layout";
function UnseenHand() {
  return (
    <Layout>
      <div className="text-center mt-3">
        <div className="text-center cycle">
          <img
            src={img}
            alt=""
            style={{
              height: "600px",
              width: "567",
              cursor: "pointer",
            }}
          />
          <p>
            Unsung deliveries <br />
            oil on canvas <br /> 12X17 inches
          </p>
        </div>
        <div className="text-center cycle">
          <img
            src={pic1}
            alt=""
            style={{ height: "600px", width: "567", cursor: "pointer" }}
          />
          <p>
            Cleansing echoes <br /> Oil on Canvas <br /> 24X24 inches
          </p>
        </div>
        <div className="text-center cycle">
          <img
            src={pic2}
            alt=""
            style={{ height: "600px", width: "567", cursor: "pointer" }}
          />
          <p>
            Radha Aunty <br /> Oil on Canvas <br /> 18X24 inches
          </p>
        </div>
        <div className="text-center cycle">
          <img
            src={pic3}
            alt=""
            style={{ height: "600px", width: "567", cursor: "pointer" }}
          />
          <p>
            Underfoot Odyssey <br /> Oil on Canvas <br /> 24X32 inches
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default UnseenHand;
