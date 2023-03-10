import React, { useState } from "react";
import { Rate } from "antd";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];
const App = ({ movierating }) => {
  const [value, setValue] = useState(1);

  return (
    <span>
      <Rate tooltips={desc} onChange={setValue} value={movierating} />
      {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ""}
    </span>
  );
};
export default App;
