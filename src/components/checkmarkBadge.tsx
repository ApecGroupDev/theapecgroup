import { FaCheck } from "react-icons/fa";

const CheckmarkBadge = ({ text = "", size = 30, fontSize = 18, bgColor = "red", textColor = "white" }) => {
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

export default CheckmarkBadge;
