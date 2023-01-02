import { Rate } from "antd";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];
const App = ({ rating, setRating }) => {
  const handlerate = (value) => {
    setRating(value);
  };

  return (
    <span>
      <Rate tooltips={desc} onChange={handlerate} value={rating} />
      {rating ? <span className="ant-rate-text">{desc[rating - 1]}</span> : ""}
    </span>
  );
};
export default App;
