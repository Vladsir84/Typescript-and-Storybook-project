import React from "react";

const TabBar: React.FC = () => {
  return (
    <div className="tabbar-main">
      <div className="tabbar-options">
        <span>Projects</span>
        <span>Users</span>
        <span>Products</span>
        <span>Reports</span>
      </div>
      <div className="tabbar-checker">{" "}</div>
      <hr className="tabbar-line" />
    </div>
  );
};

export default TabBar;
