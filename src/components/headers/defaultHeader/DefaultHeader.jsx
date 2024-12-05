import React from "react";
import defaultMenu from "../../../data/defaultMenu";

const DefaultHeader = () => {
  return (
    <div className=" h-20  flex w-full">
      <div className=" w-56 text-center flex items-center justify-center">
        <img
          src="/assets/images/mine.jpg"
          className="w-16 h-16   rounded-full"
          alt=""
        />
      </div>
      <div className=" w-full flex justify-end place-items-center px-10">
        {defaultMenu?.map((menu) => {
          return (
            <ul>
              <li className="cursor-pointer px-5 hover:bg-sky-700">
                {menu.menuName}
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default DefaultHeader;
