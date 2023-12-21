import React from "react";
import img from "../images/cycleZomatop.png";
import Layout from "./Layout";
import pic7 from "../pics/pic7.jpg";
import pic8 from "../pics/pic8.png";
import pic9 from "../pics/pic9.jpg";
import pic10 from "../pics/pic10.jpg";
function Savouring() {
  return (
    <Layout>
      <div className="text-center mt-3">
        <div className="text-center cycle">
          <img
            src={pic7}
            alt=""
            style={{
              height: "600px",
              width: "567",
              cursor: "pointer",
            }}
          />
          <p>
            24th August <br />
            Oil on Canvas <br />
            24X36 inches
          </p>
        </div>
        <div className="text-center cycle">
          <img
            src={pic8}
            alt=""
            style={{
              height: "600px",
              width: "567",
              cursor: "pointer",
            }}
          />
          <p>
            Unconventional Ease <br />
            Oil on Canvas <br />
            24X24 inches
          </p>
        </div>
        <div className="text-center cycle">
          <img
            src={pic9}
            alt=""
            style={{
              height: "600px",
              width: "567",
              cursor: "pointer",
            }}
          />
          <p>
            Beyond Heels (Unfinished) <br />
            Oil on Canvas <br />
            24X24 inches
          </p>
        </div>
        <div className="text-center cycle">
          <img
            src={pic10}
            alt=""
            style={{
              height: "600px",
              width: "567",
              cursor: "pointer",
            }}
          />
          <p>
            Whispers of Fun <br />
            Oil on Canvas <br />
            21X27 inches
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Savouring;
