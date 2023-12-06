import { Flex } from "antd";
import "../../styles/row.css";

function Row({ icon, title, value }) {
  return (
    <Flex gap={8} className="row" align="flex-start">
      <Flex gap={8} align="center">
        <div className="row-icon">{icon}</div>
        <div className="row-title">{title}:</div>
      </Flex>
      <div className="row-value">{value}</div>
    </Flex>
  );
}

export default Row;
