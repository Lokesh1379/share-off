import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaSearch } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { MdLocalOffer } from "react-icons/md";
import { TbMessageFilled } from "react-icons/tb";
import { isActiveLink } from "../../../utils/linkActiveChecker";
const MobileView = () => {
  const { pathname } = useLocation();
  return (
    <div className="mobileview_container ">
      <Link
        to="/"
        className={` ${
          isActiveLink("/", pathname) ? " activeMobileLink " : ""
        }mobile_bar`}
      >
        <FaHome className="text-xl" />
      </Link>
      <Link
        to="/search"
        className={` ${
          isActiveLink("/search", pathname) ? " activeMobileLink " : ""
        }mobile_bar`}
      >
        <FaSearch className="text-xl" />
      </Link>
      <Link
        to="/post-offer"
        className={` ${
          isActiveLink("/post-offer", pathname) ? " activeMobileLink " : ""
        }mobile_bar`}
      >
        <MdLocalOffer className="text-xl" />
      </Link>
      <Link
        to="/messages"
        className={` ${
          isActiveLink("/messages", pathname) ? " activeMobileLink " : ""
        }mobile_bar`}
      >
        <TbMessageFilled className="text-xl" />
      </Link>
      <Link
        to="/settings"
        className={` ${
          isActiveLink("/settings", pathname) ? " activeMobileLink " : ""
        }mobile_bar`}
      >
        <IoMdSettings className="text-xl" />
      </Link>
    </div>
  );
};

export default MobileView;
