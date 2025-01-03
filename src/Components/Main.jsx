import React from "react";

function Main(props) {
  const { data } = props;
  return (
    <div className="imgContainer">
      <img src={data.hdurl} alt={data.title || "bg-img"} className="bgImage" />
    </div>
  );
}

export default Main;
