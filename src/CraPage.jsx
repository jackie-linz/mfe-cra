import React from "react";
import { Link, Route, Routes } from "react-router-dom";

export const CraPage = () => {
  return (
    <div>
      <h1>CRA</h1>
      <nav>
        <ul>
          <li>
            <Link to="child1">CRA Child 1</Link>
          </li>
          <li>
            <Link to="child2">CRA Child 2</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="child1" element={<div>CRA child1 content</div>} />
        <Route path="child2" element={<div>CRA child2 content</div>} />
      </Routes>
    </div>
  );
};

export default CraPage;
