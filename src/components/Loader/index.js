import Loader from "react-loader-spinner";
import React from "react";
const Loading = () => {
  //other logic

  return (
    <div
      style={{
        height: "96vh",
        position: "relative",
      }}
    >
      <span
        style={{
          height: "96vh",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translatY(-50%)",
        }}
      >
        <Loader
          type="Oval"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={5000} //3 secs
        />
      </span>
    </div>
  );
};
export default Loading;
