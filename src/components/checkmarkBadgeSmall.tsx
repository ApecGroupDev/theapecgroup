import { FaCheck } from "react-icons/fa";

const CheckmarkBadgeSmall = ({ text = "", size = 16, fontSize = 9, bgColor = "#c62931", textColor = "white" }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{
        backgroundColor: bgColor,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexShrink: 0,
      }}>
        <FaCheck style={{ color: textColor, fontSize: `${fontSize}px` }} />
      </div>
      {text && <span style={{ marginLeft: "10px" }}>{text}</span>}
    </div>
  );
};

export default CheckmarkBadgeSmall;
