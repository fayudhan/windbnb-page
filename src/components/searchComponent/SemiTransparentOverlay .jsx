import React from "react";

const SemiTransparentOverlay = ({ onClose }) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-50 transition-opacity"
      style={{ backdropFilter: "blur(10px)" }}
      onClick={onClose}
    ></div>
  );
};

export default SemiTransparentOverlay;
