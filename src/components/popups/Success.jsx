import React, { useState, useEffect } from "react";

const SlideInPopup = ({
  background = "bg-green-500",
  message = "Offer Saved",
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed bottom-10 right-[-1px] transform ${
        visible ? "translate-x-1 " : "translate-x-full "
      } transition-transform duration-500 ease-in-out ${background} text-white p-4 rounded-l-md shadow-lg`}
    >
      <p className={`bg-${background}`}>{message}</p>
    </div>
  );
};

export default SlideInPopup;
