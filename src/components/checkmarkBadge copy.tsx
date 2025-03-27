import { FaCheck } from "react-icons/fa";

const CheckmarkBadgeSmall = ({ text = "", size = 20, fontSize = 12, bgColor = "red", textColor = "white" }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{
        backgroundColor: bgColor,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <FaCheck style={{ color: textColor, fontSize: `${fontSize}px` }} />
      </div>
      {text && <span style={{ marginLeft: "10px" }}>{text}</span>}
    </div>
  );
};

export default CheckmarkBadgeSmall;
