import React from "react";

function Sidebar(props) {
  const { handleToggleModal,data } = props;
  return (
    <div className="sidebar">
      <div className="bgOverLay"></div>
      <div className="sidebarContents">
        <h2>{data?.title}</h2>
        <div className="descriptionContainer">
          <p className="descriptionTitle">{data?.date}</p>
          <p>
            {data?.explanation}
          </p>
        </div>
        <button
          onClick={handleToggleModal}
        >
          <i className="fa-solid fa-right-long"></i>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
