import { useState } from "react";
import MetaComponent from "../headers/globalComponents/MetaComponent";
import MobileView from "../headers/MobileView/MobileView";
import SidebarMenu from "../sidebar/SidebarMenu";
import { CiMenuKebab } from "react-icons/ci";
import { FaRegBookmark } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa6";
import { LiaTelegramPlane } from "react-icons/lia";
import { AiOutlineMessage } from "react-icons/ai";
import post_offers from "../../data/posts";
const metadata = {
  title: "Home || Share%off ",
  description: "Share%off - convert Offers into money",
};

const Home = () => {
  const [expanded, setExpanded] = useState({});

  const toggleContent = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="h-screen flex flex-col fixed">
      <MetaComponent meta={metadata} />
      <div className="flex h-full">
        <div className="w-60 h-full hidden md:block bg-zinc-950 ">
          <SidebarMenu />
        </div>
        <div className="w-full  fixed bottom-0 md:hidden">
          <MobileView />
        </div>
        {/* Posts Container */}
        <div className=" w-4/2 mx-2 lg:mx-8 hide-scrollbar overflow-y-scroll posts-container scrollbar-hidden grid justify-center bg-zinc-950 py-20 h-screen">
          {post_offers.map((item, index) => {
            return (
              <div
                key={index}
                className="h-fit rounded-md  bg-zinc-900 shadow-md p-1 my-1 "
              >
                <div className="flex justify-between">
                  <div className="flex">
                    <img
                      src={item?.image}
                      className="rounded-full h-12 w-12 p-2"
                      alt=""
                    />
                    <span className="place-content-center text-white">
                      {item?.platform}
                    </span>
                  </div>
                  <div className="text-white place-content-center px-2">
                    <CiMenuKebab className="text-2xl" />
                  </div>
                </div>
                <div>
                  <img
                    src={item?.image}
                    className="h-80 w-full rounded-md my-2 "
                    alt=""
                  />
                </div>
                <div className="flex justify-between text-white">
                  <div className="flex">
                    <FaRegBookmark className="text-4xl p-2" />
                    <FaRegComment className="text-4xl p-2" />
                    <LiaTelegramPlane className="text-4xl p-2" />
                  </div>
                  <div>
                    <AiOutlineMessage className="text-4xl p-2" />
                  </div>
                </div>
                <div className="caption  text-white p-2">
                  <strong>User name </strong>
                  <br />
                  <span>
                    {expanded[index]
                      ? item?.offer
                      : `${item?.offer.slice(0, 70)}.`}
                    <span
                      onClick={() => toggleContent(index)}
                      className="text-blue-500 cursor-pointer ml-2 font-light"
                    >
                      {item?.offer?.length > 50
                        ? expanded[index]
                          ? "Show Less"
                          : "Read More"
                        : null}
                    </span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <div className=" w-96 mr-2 rounded-md p-2 hidden lg:block bg-zinc-900 ">
          <div className="  bg-zinc-900 mt-10">
            <h2 className="text-center p-2 bg-indigo-500 text-white font-thin rounded-md my-2  width-96">
              Top Offers
            </h2>
            <hr className="mb-2 " />
          </div>

          <div className="w-full pb-20 rounded-md h-screen flex flex-wrap justify-center overflow-y-scroll hide-scrollbar">
            {post_offers.map((offer) => {
              return (
                <>
                  <div className="rounded-md m-1  hover:scale-110 transition-transform duration-300 hover:bg-indigo-500 group">
                    <img
                      src={offer.image}
                      alt=""
                      className="w-32 h-32 p-1 rounded-md"
                    />
                    <p className="text-white rounded-md font-thin text-center group-hover:bg-indigo-500 ">
                      {offer?.platform}
                    </p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
