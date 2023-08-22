import React from "react";
import "./Overlay.css";
import Spinner from "../Spinner/Spinner";

function Overlay({ children, isLoading }) {
  return (
    <>
      {isLoading && <Spinner />}
      {children}
    </>
  );
}

export default Overlay;
