import React, { useState } from "react";

const TabBar: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string>("Projects");

  return (
    <div className="tabbar-main">
      <div className="tabbar-options">
        <span onClick={() => setSelectedValue("Projects")}>Projects</span>
        <span onClick={() => setSelectedValue("Users")}>Users</span>
        <span onClick={() => setSelectedValue("Products")}>Products</span>
        <span onClick={() => setSelectedValue("Reports")}>Reports</span>
      </div>
      <div
        className="tabbar-checker"
        style={{
          marginLeft:
            selectedValue === "Projects" ? "0px" : 
            selectedValue === "Users" ? "80px" : 
            selectedValue === "Products" ? "165px" : "260px"
          }}
      >
        {" "}
      </div>
      <hr className="tabbar-line" />
    </div>
  );
};

export default TabBar;
