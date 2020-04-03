import React, { CSSProperties } from "react";
import { Link } from "react-router-dom";

function ProductNotFind() {
  return (
    <Link to="/">
      <h3 style={text}>
        Oops nu hamnade vi lite fel, men bilden kommer att guida dig tillbaka till din dröm colorini.
      </h3>
      <img
        style={{
          width: "100vw",
          height: "100vh",
          objectFit: "cover"
        }}
        alt="empty room with white paint"
        src="https://images.unsplash.com/photo-1481277542470-605612bd2d61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2795&q=80"
      ></img>
    </Link>
  );
}

export default ProductNotFind;

const text: CSSProperties = {
  position: "relative",
  top: "19rem",
  textAlign: "center",
  marginTop: "-4rem",
  color: "#252824"
};
